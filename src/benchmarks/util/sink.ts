const justConst = Date.now() / 1e12;

export function sink(a: number[] | number[][] | number | string | { toArray(): number[] | number[][] } | undefined | null): number {
    if (a == null) {
        return .1;
    }

    if (typeof a === 'number') {
        return a;
    }

    if (typeof a === 'string') {
        return a.length ? a.charCodeAt(Math.floor(a.length / 2)) : .2;
    }

    const arr = Array.isArray(a) ? a : a.toArray();

    if (!arr.length) {
        return justConst;
    }

    const arr0 = arr[0];
    const arr1 = arr[Math.floor(arr.length / 2)];
    const arr2 = arr[arr.length - 1];

    return sink(arr0) - 2 * sink(arr1) + sink(arr2);
}
