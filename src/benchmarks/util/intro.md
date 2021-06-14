# Benchmarks

## Libraries compared in this benchmarks
* Fluent Streams — build on ES6 iterables, optimized for arrays
* JavaScript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Unlike all other libs it's not lazy; however, thanks to native support, it's usually quite fast.
* [Sequency](https://github.com/winterbe/sequency) — like Fluent Streams it's built on iterables;
its main idea is simplicity: there are not so much code, and as a result it's very simple.
* [Lazy.js](https://github.com/dtao/lazy.js) — inspired by [Underscore](http://underscorejs.org/) and
[Lodash](https://lodash.com/). It's very fast but this comes with the huge price: the lib is not
ES6-iterables-compliant.

## What benchmarks contain
* All benchmarks include:
  * Lifting a native structure (Array or Iterable) to the wrapper structure (Stream, Sequence etc)
  * Intermediate operation being benchmarked (`filter()`, `map()`)
  * Conversion to an array
  * Simple `O(1)` operation on the result array
* Special notes on the Array:
  * When the input is an Array, no lifting and result-to-array conversion needed
  * When the input is an Iterable, lifting is made with `[...iterable]`
* Special notes on Lazy.js
  * Because it doesn't support iterables, custom generator created with
  [Sequence.define](http://danieltao.com/lazy.js/docs/#Sequence-define) is used

## The legend
⭐ The fastest  
🌠 Second place  
✨ Third place

Bundle size is in kilobytes, the less the better.

For benchmarks numbers are operations per second (hz). The more the better.

## Bundle size
As per [Bundlephobia](https://bundlephobia.com/). Polyfills are not included.

| Lib | Minified | Gzipped |
|-----|----------|---------|
| Fluent Streams | 18.2kB 🌠 | 4.0kB 🌠 |
| Array | 0 ⭐ | 0 ⭐ |
| Sequency | 25.7kB ✨ | 4.4kB ✨ |
| Lazy.js | 50.4kB | 10kB |

