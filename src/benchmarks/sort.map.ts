import { benchmark } from './util/benchmark';

export default benchmark(
    'sort.map',
    {
        str: s => s.sort().map(i => i + .2),
        arr: (a, _, canModify) => (canModify ? a : [...a]).sort().map(i => i + .2),
        seq: q => q.sorted().map(i => i + .2),
        laz: l => l.sort().map(i => i + .2),
    },
);
