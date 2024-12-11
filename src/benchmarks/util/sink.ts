const justConst = Date.now() / 1e12;

export function sink(a: number[] | number[][] | [string, number[]][] | number | string | { toArray(): number[] | number[][] | [number, number[]][] } | undefined | null): number {
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

    return sinkItem(arr0) - 2 * sinkItem(arr1) + sinkItem(arr2);
}

function sinkItem(i: undefined | null | number | number[] | [string, number[]] | [number, number[]]): number {
    if (i == null) return justConst

    if (typeof i === 'number' || typeof i === 'string') {
        return sink(i)
    }
    if (i.length >= 2) {
        const i0 = i[0]
        const i1 = i[1]
        return sink(i0) - sink(i1)
    }
    if (i.length === 1) {
        return sink(i[0])
    }
    return justConst
}