| Fluent Streams | 8.5+ kB 🌠 | 2.6+ kB 🌠 |# Benchmarks

## Libraries Compared in These Benchmarks  

- **Fluent Streams** — Built on ES6 iterables and optimized for arrays.  
- **JavaScript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** — Unlike the other libraries, it is not lazy. However, thanks to native support, it is usually very fast.  
- **[Sequency](https://github.com/winterbe/sequency)** — Like Fluent Streams, it is built on iterables but does not use generators. As a result, it is slightly faster, though its bundle size is larger.  
- **[Lazy.js](https://github.com/dtao/lazy.js)** — Inspired by [Underscore](http://underscorejs.org/) and [Lodash](https://lodash.com/). While very fast, it comes with a significant tradeoff: the library is not compliant with ES6 iterables.  

## What the Benchmarks Include  

- **All benchmarks include:**  
  - Lifting a native structure (`Array` or `Iterable`) into a wrapper structure (e.g., `Stream`, `Sequence`, etc.).
  - Benchmarking an intermediate operation (e.g., `filter()`, `map()`).
  - Converting the result back to an array.
  - Performing a simple `O(1)` operation on the resulting array.
- **Special notes on `Array`:**
  - When the input is an `Array`, no lifting or result-to-array conversion is required.
  - When the input is an `Iterable`, lifting is performed using `[...iterable]`.
- **Special notes on Lazy.js:**
  - Since Lazy.js does not support iterables, a custom generator is created using
    [`Sequence.define`](http://danieltao.com/lazy.js/docs/#Sequence-define).

## Environment used for these benchmarks  

- Apple M1  
- Node.js 22.8  

## Legend  

- ⭐ The fastest
- 🌠 Second place
- ✨ Third place

Bundle sizes are measured in kilobytes — smaller is better.  

Benchmark results are expressed in operations per second (Hz) — higher is better.  

## Bundle size

As per [Bundlephobia](https://bundlephobia.com/). Polyfills are not included.

| Lib | Minified | Gzipped |
|-----|----------|---------|
| Fluent Streams | 9.2 kB 🌠 | 3.2 kB 🌠 |
| Array | 0 ⭐ | 0 ⭐ |
| Sequency | 25.7 kB ✨ | 4.4 kB ✨ |
| Lazy.js | 50.4 kB | 10 kB |

