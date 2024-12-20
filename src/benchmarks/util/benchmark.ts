import * as Benchmark from 'benchmark';
import { Event } from 'benchmark';
import { genInputs } from './genInput';
import { sink } from './sink';
import { Stream, stream } from 'fluent-streams';
import Sequence, { asSequence } from 'sequency';
import Lazy from 'lazy.js';
import { asIterable } from './asIterable';
import { LazyGen } from './lazyGen';
import { libs, parseName, Result, toName } from './result';

const inputAsItr = [false, true];

export function benchmark(p: {
    name: string,
    note?: string,
    fns: {
        str: (input: Stream<number>, n: number) => Stream<number | number[] | [number, number[]]> | number | string | undefined,
        arr: (input: number[], n: number, canModify: boolean) => number[] | number[][] | [string, number[]][] | number | string | undefined,
        seq: (input: Sequence<number>, n: number) => Sequence<number | number[] | [number, number[]]> | number | null | string | undefined,
        laz: (input: ReturnType<typeof Lazy>, n: number) => {toArray: () => number[] | number[][] | [string, number[]][]} | number | string | undefined,
    },
}): () => Result {
    return () => {
        let suite = new Benchmark.Suite();
        let collector = 0;
        const result: Result = {
            name: p.name,
            res: {
                arr: {str: {}, arr: {}, seq: {}, laz: {}},
                itr: {str: {}, arr: {}, seq: {}, laz: {}},
            },
            note: p.note ?? '',
        };
    
        libs.forEach(lib => inputAsItr.forEach(asItr => genInputs().forEach(({a, run}) => {
            const runFn
                = lib === 'str' ? () => p.fns[lib](stream(asItr ? asIterable(a) : a), a.length)
                : lib === 'arr' ? () => p.fns[lib](asItr ? [...asIterable(a)] : a, a.length, asItr)
                : lib === 'seq' ? () => p.fns[lib](asSequence(asItr ? asIterable(a) : a), a.length)
                : lib === 'laz' ? () => p.fns[lib](asItr ? LazyGen(a) : Lazy(a), a.length)
                : undefined as any;
            return suite = suite.add(
                toName(lib, asItr ? 'itr' : 'arr', a.length, p.name, run),
                () => collector += sink(runFn()),
            );
        })));
    
        suite
            .on('cycle', (event: Event) => {
                console.log(String(event.target));
                if (collector > 0) collector = -collector;
                const {lib, input, n, run} = parseName(event.target.name!);
                if (run === 'measure') {
                    if (event.target.hz === undefined) {
                        throw new Error('No hz');
                    }
                    result.res[input][lib][n] = event.target.hz;
                }
            })
            .on('complete', () => console.log(`(collector=${ collector })`))
            .run();
        return result;
    };
}
