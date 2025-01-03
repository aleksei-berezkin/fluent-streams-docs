import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'at',
    fns: {
        str: (s, n) => s.at(Math.floor(n / 2)).orUndefined(),
        arr: (a, n) => a[Math.floor(n / 2)],
        seq: (q, n) => n > 0 ? q.elementAt(Math.floor(n / 2)) : .1,
        laz: (l, n) => l.get(Math.floor(n / 2) as any),
    },
});
