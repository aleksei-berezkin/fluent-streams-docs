import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'zipWithIndex',
    note: 'Sequency returns {value, index}, so additional mapping to [value, index] needed',
    fns: {
        str: (s, _n) => s.zipWithIndex(),
        arr: (a, _n, _canModify) => a.map((value, index) => [value, index]),
        seq: (q, _n) => q.withIndex().map(({value, index}) => [value, index]),
        laz: (l, _n) => l.map<number[]>(((i: number, ix: number) => [i, ix]) as any),
    },
});
