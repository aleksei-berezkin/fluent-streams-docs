import { asSequence } from 'sequency';
import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'groupBy',
    note: 'Using `Object.groupBy()` for Array',
    fns: {
        str: s => s.groupBy(getKey),
        arr: a => Object.entries(Object.groupBy(a, i => String(getKey(i)))) as [string, number[]][],
        seq: q => asSequence(q.groupBy(getKey)),
        laz: l => l.groupBy(i => String(getKey(i))),
    },
});

function getKey(i: number): number {
    if (i == null) {
        // Lazy.js bug
        return 0
    }
    return Math.floor(i) % 100
}