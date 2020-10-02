import { benchmark } from './util/benchmark';

export default benchmark(
    'sort.at',
    {
        str: (s, n) => s.sort().at(Math.floor(n / 2)).orElseUndefined(),
        arr: (a, n, canModify) => (canModify ? a : [...a]).sort()[Math.floor(n / 2)],
        seq: (q, n) => q.sorted().elementAtOrNull(Math.floor(n / 2)),
        laz: (l, n) => (l.sort() as any).get(Math.floor(n / 2)),
    },
);
