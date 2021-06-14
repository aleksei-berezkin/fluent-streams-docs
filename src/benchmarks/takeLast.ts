import { benchmark } from './util/benchmark';

export default benchmark({
    name: 'takeLast',
    note: 'Sequency doesn\'t have this, so using withIndex().filter() instead',
    fns: {
        str: (s, n) => s.takeLast(Math.ceil(n / 10)),
        arr: (a, n, _canModify) => a.slice(Math.floor(n * .9)),
        seq: (q, n) => q.withIndex().filter(({index}) => index >= Math.floor(n * .9)).map(({value}) => value),
        laz: (l, n) => l.last(Math.ceil(n / 10)),
    },
});
