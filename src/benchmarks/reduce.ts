import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'reduce',
    fns: {
        str: s => s.reduce((l, r) => l + r).orUndefined(),
        arr: (a, n) => n > 0 ? a.reduce((p, c) => p + c) : undefined,
        seq: (q, n) => n > 0 ? q.reduce<number, number>((acc, val) => acc + val) : undefined,
        laz: l => l.reduce((agg, memo) => agg + memo),
    },
});
