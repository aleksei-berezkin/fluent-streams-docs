import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'distinct',
    fns: {
        str: s => s.distinctBy(i => i),
        arr: a => [...new Set(a)],
        seq: q => q.distinct(),
        laz: l => l.uniq(),
    },
});
