# Benchmarks

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
| Fluent Streams | 8.2kB 🌠 | 2.5kB 🌠 |
| Array | 0 ⭐ | 0 ⭐ |
| Sequency | 25.7kB ✨ | 4.4kB ✨ |
| Lazy.js | 50.4kB | 10kB |

## at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.88M | 1.71M | 1.71M | 1.71M | 1.71M ✨ | 1.71M ✨ |
| Array | 87.0M ⭐ | 79.6M ⭐ | 80.7M ⭐ | 79.2M ⭐ | 79.5M ⭐ | 79.2M ⭐ |
| Sequency | 72.9M ✨ | 48.8M ✨ | 17.2M ✨ | 2.42M ✨ | 260k | 26.4k |
| Lazy.js | 84.5M 🌠 | 77.3M 🌠 | 75.0M 🌠 | 75.8M 🌠 | 74.1M 🌠 | 75.7M 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.20M | 1.23M | 1.18M | 885k ✨ | 298k 🌠 | 42.3k 🌠 |
| Array | 3.54M ✨ | 3.09M ✨ | 2.08M ✨ | 490k | 59.8k | 6.24k |
| Sequency | 3.77M 🌠 | 3.59M 🌠 | 3.07M 🌠 | 1.36M 🌠 | 216k ✨ | 23.6k ✨ |
| Lazy.js | 17.3M ⭐ | 17.3M ⭐ | 12.9M ⭐ | 3.61M ⭐ | 470k ⭐ | 48.3k ⭐ |

## append
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 8.42M 🌠 | 7.26M ✨ | 3.15M | 475k | 50.2k | 5.03k |
| Array | 8.35M ✨ | 7.85M 🌠 | 5.08M 🌠 | 1.19M ⭐ | 132k ⭐ | 13.9k ⭐ |
| Sequency | 7.38M | 6.83M | 3.33M ✨ | 490k ✨ | 50.2k ✨ | 5.39k ✨ |
| Lazy.js | 8.72M ⭐ | 8.40M ⭐ | 5.60M ⭐ | 963k 🌠 | 95.9k 🌠 | 10.7k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.46M | 1.37M | 972k | 272k | 33.5k | 3.44k |
| Array | 2.40M 🌠 | 2.24M ✨ | 1.59M ✨ | 398k ✨ | 49.1k 🌠 | 4.95k ✨ |
| Sequency | 2.37M ✨ | 2.35M 🌠 | 1.68M 🌠 | 403k 🌠 | 48.1k ✨ | 5.29k 🌠 |
| Lazy.js | 6.06M ⭐ | 5.79M ⭐ | 4.26M ⭐ | 1.00M ⭐ | 113k ⭐ | 12.1k ⭐ |

## appendAll
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.87M | 1.72M | 1.13M | 257k | 29.4k | 3.10k |
| Array | 7.16M 🌠 | 6.56M 🌠 | 4.49M 🌠 | 1.14M 🌠 | 126k 🌠 | 13.5k 🌠 |
| Sequency | 5.41M ✨ | 4.98M ✨ | 2.79M ✨ | 465k ✨ | 49.6k ✨ | 5.23k ✨ |
| Lazy.js | 10.9M ⭐ | 10.7M ⭐ | 8.86M ⭐ | 2.35M ⭐ | 249k ⭐ | 27.5k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.28M | 1.21M | 905k | 267k | 33.3k | 3.38k |
| Array | 2.33M 🌠 | 2.16M 🌠 | 1.55M 🌠 | 400k 🌠 | 49.6k 🌠 | 4.98k ✨ |
| Sequency | 2.17M ✨ | 2.11M ✨ | 1.55M ✨ | 392k ✨ | 47.8k ✨ | 5.24k 🌠 |
| Lazy.js | 4.87M ⭐ | 4.73M ⭐ | 3.65M ⭐ | 947k ⭐ | 112k ⭐ | 12.3k ⭐ |

## butLast
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 14.2M | 14.1M | 3.75M ✨ | 509k ✨ | 53.1k ✨ | 5.31k ✨ |
| Array | 46.2M ⭐ | 45.7M ⭐ | 8.02M 🌠 | 1.41M 🌠 | 150k 🌠 | 15.6k 🌠 |
| Sequency | 23.2M 🌠 | 20.4M ✨ | 2.95M | 353k | 36.3k | 3.80k |
| Lazy.js | 20.9M ✨ | 20.8M 🌠 | 11.0M ⭐ | 2.31M ⭐ | 240k ⭐ | 26.5k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.56M | 1.52M | 984k | 245k | 29.1k | 2.95k |
| Array | 3.38M 🌠 | 3.01M ✨ | 1.98M 🌠 | 492k 🌠 | 60.3k 🌠 | 5.89k 🌠 |
| Sequency | 3.22M ✨ | 3.17M 🌠 | 1.52M ✨ | 287k ✨ | 33.9k ✨ | 3.62k ✨ |
| Lazy.js | 9.79M ⭐ | 7.66M ⭐ | 5.13M ⭐ | 946k ⭐ | 94.3k ⭐ | 10.2k ⭐ |

## distinct
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.37M | 1.97M | 821k | 126k ✨ | 13.1k 🌠 | 1.07k 🌠 |
| Array | 30.6M 🌠 | 17.9M ⭐ | 4.31M 🌠 | 388k ⭐ | 32.1k ⭐ | 2.17k ⭐ |
| Sequency | 33.6M ⭐ | 7.45M ✨ | 2.73M ✨ | 236k 🌠 | 6.99k ✨ | 93.6 |
| Lazy.js | 29.0M ✨ | 17.3M 🌠 | 7.49M ⭐ | 70.4k | 5.83k | 387 ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.51M | 1.33M | 732k | 130k ✨ | 13.8k 🌠 | 1.12k 🌠 |
| Array | 3.15M ✨ | 2.66M 🌠 | 1.42M 🌠 | 217k ⭐ | 20.8k ⭐ | 1.57k ⭐ |
| Sequency | 3.51M 🌠 | 2.45M ✨ | 1.43M ⭐ | 187k 🌠 | 6.77k ✨ | 92.7 |
| Lazy.js | 8.76M ⭐ | 4.17M ⭐ | 833k ✨ | 63.5k | 5.92k | 361 ✨ |

## filter
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.51M | 2.09M | 1.42M | 276k | 31.1k | 3.24k |
| Array | 86.0M ⭐ | 11.1M ✨ | 9.18M 🌠 | 1.74M 🌠 | 206k 🌠 | 14.8k 🌠 |
| Sequency | 32.4M ✨ | 24.2M ⭐ | 4.35M ✨ | 689k ✨ | 59.7k ✨ | 5.45k ✨ |
| Lazy.js | 41.2M 🌠 | 22.6M 🌠 | 17.7M ⭐ | 4.64M ⭐ | 412k ⭐ | 19.9k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.55M | 1.51M | 1.07M | 311k | 35.4k | 3.68k |
| Array | 3.51M 🌠 | 2.85M 🌠 | 1.93M ✨ | 453k ✨ | 54.7k 🌠 | 4.62k ✨ |
| Sequency | 3.49M ✨ | 2.58M ✨ | 1.93M 🌠 | 491k 🌠 | 51.4k ✨ | 4.91k 🌠 |
| Lazy.js | 11.6M ⭐ | 11.0M ⭐ | 5.74M ⭐ | 1.22M ⭐ | 138k ⭐ | 7.88k ⭐ |

## find
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 930k | 908k | 783k | 358k | 55.2k | 5.98k |
| Array | 89.0M ⭐ | 89.3M ⭐ | 67.0M ⭐ | 16.4M ⭐ | 1.68M ⭐ | 173k ⭐ |
| Sequency | 30.6M ✨ | 20.5M ✨ | 5.79M ✨ | 758k ✨ | 78.5k ✨ | 7.93k ✨ |
| Lazy.js | 46.9M 🌠 | 35.9M 🌠 | 11.3M 🌠 | 1.66M 🌠 | 173k 🌠 | 17.4k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 720k | 714k | 656k | 359k | 66.3k ✨ | 7.53k ✨ |
| Array | 3.53M 🌠 | 3.09M ✨ | 2.08M ✨ | 486k ✨ | 58.6k | 5.81k |
| Sequency | 3.43M ✨ | 3.25M 🌠 | 2.27M 🌠 | 617k 🌠 | 76.8k 🌠 | 7.98k 🌠 |
| Lazy.js | 15.2M ⭐ | 13.4M ⭐ | 5.92M ⭐ | 1.01M ⭐ | 109k ⭐ | 11.1k ⭐ |

## flatMap
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.49M | 1.74M | 525k | 66.9k | 6.92k | 662 |
| Array | 30.7M ⭐ | 4.29M ✨ | 1.28M ⭐ | 154k ⭐ | 15.0k ⭐ | 1.41k ⭐ |
| Sequency | 26.6M 🌠 | 5.09M 🌠 | 956k ✨ | 99.3k ✨ | 9.66k ✨ | 906 ✨ |
| Lazy.js | 24.9M ✨ | 7.17M ⭐ | 1.12M 🌠 | 120k 🌠 | 11.9k 🌠 | 1.14k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.53M | 1.18M | 468k | 66.9k | 7.01k | 656 |
| Array | 3.16M ✨ | 1.67M ✨ | 780k 🌠 | 117k ⭐ | 12.0k ⭐ | 1.10k ⭐ |
| Sequency | 3.38M 🌠 | 2.10M 🌠 | 717k ✨ | 97.2k 🌠 | 9.97k 🌠 | 948 🌠 |
| Lazy.js | 5.16M ⭐ | 3.32M ⭐ | 813k ⭐ | 95.7k ✨ | 9.61k ✨ | 911 ✨ |

## join
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 17.7M | 13.8M | 2.77M | 331k | 27.0k | 1.06k |
| Array | 72.5M ⭐ | 30.1M ⭐ | 4.54M ⭐ | 535k ⭐ | 37.7k ⭐ | 1.27k ⭐ |
| Sequency | 44.2M 🌠 | 24.2M 🌠 | 3.43M ✨ | 419k ✨ | 31.1k 🌠 | 1.17k ✨ |
| Lazy.js | 34.0M ✨ | 19.7M ✨ | 3.70M 🌠 | 449k 🌠 | 30.6k ✨ | 1.22k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.44M | 3.14M ✨ | 1.58M ✨ | 295k ✨ | 26.5k ✨ | 1.05k ✨ |
| Array | 3.47M ✨ | 2.80M | 1.45M | 263k | 22.5k | 1.04k |
| Sequency | 3.70M 🌠 | 3.35M 🌠 | 1.70M 🌠 | 334k 🌠 | 28.6k 🌠 | 1.11k 🌠 |
| Lazy.js | 11.0M ⭐ | 7.67M ⭐ | 2.59M ⭐ | 385k ⭐ | 29.5k ⭐ | 1.14k ⭐ |

## map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 11.5M | 6.72M | 2.52M | 345k ✨ | 35.9k ✨ | 3.60k ✨ |
| Array | 71.6M ⭐ | 10.9M 🌠 | 6.23M ⭐ | 1.12M ⭐ | 122k ⭐ | 12.7k ⭐ |
| Sequency | 31.2M ✨ | 7.69M ✨ | 2.73M ✨ | 329k | 33.0k | 3.47k |
| Lazy.js | 33.7M 🌠 | 15.3M ⭐ | 5.30M 🌠 | 678k 🌠 | 69.3k 🌠 | 7.13k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.53M | 1.39M | 952k | 235k | 28.2k | 2.84k |
| Array | 3.46M ✨ | 2.41M ✨ | 1.56M 🌠 | 340k 🌠 | 40.0k 🌠 | 4.00k 🌠 |
| Sequency | 3.49M 🌠 | 2.52M 🌠 | 1.52M ✨ | 285k ✨ | 32.0k ✨ | 3.41k ✨ |
| Lazy.js | 7.80M ⭐ | 6.69M ⭐ | 2.86M ⭐ | 420k ⭐ | 43.7k ⭐ | 4.44k ⭐ |

## reduce
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.71M | 1.68M | 1.39M | 572k | 84.6k | 9.22k |
| Array | 88.6M ⭐ | 78.0M ⭐ | 62.1M ⭐ | 14.1M ⭐ | 1.07M ⭐ | 105k ⭐ |
| Sequency | 57.7M 🌠 | 33.1M ✨ | 9.62M ✨ | 1.20M ✨ | 125k ✨ | 12.8k ✨ |
| Lazy.js | 36.3M ✨ | 35.3M 🌠 | 10.5M 🌠 | 1.32M 🌠 | 135k 🌠 | 13.7k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.16M | 1.14M | 1.01M | 471k | 78.8k ✨ | 8.98k 🌠 |
| Array | 3.50M ✨ | 3.04M ✨ | 2.06M ✨ | 478k ✨ | 57.3k | 5.76k |
| Sequency | 3.76M 🌠 | 3.50M 🌠 | 2.56M 🌠 | 805k ⭐ | 107k ⭐ | 11.4k ⭐ |
| Lazy.js | 12.3M ⭐ | 9.82M ⭐ | 4.47M ⭐ | 747k 🌠 | 80.4k 🌠 | 8.13k ✨ |

## sort.at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.39M | 1.30M | 719k | 83.1k | 4.27k | 215 |
| Array | 48.2M ⭐ | 38.4M ⭐ | 2.28M 🌠 | 105k 🌠 | 4.69k 🌠 | 223 🌠 |
| Sequency | 27.8M ✨ | 17.4M 🌠 | 1.72M ✨ | 92.9k ✨ | 4.47k ✨ | 217 ✨ |
| Lazy.js | 45.8M 🌠 | 15.6M ✨ | 2.49M ⭐ | 143k ⭐ | 7.53k ⭐ | 551 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 995k | 965k | 608k | 84.0k ✨ | 4.23k | 214 ✨ |
| Array | 3.48M 🌠 | 3.06M ✨ | 1.12M 🌠 | 88.7k 🌠 | 4.24k ✨ | 214 🌠 |
| Sequency | 3.41M ✨ | 3.07M 🌠 | 1.07M ✨ | 81.4k | 4.31k 🌠 | 213 |
| Lazy.js | 13.0M ⭐ | 7.63M ⭐ | 2.17M ⭐ | 134k ⭐ | 7.42k ⭐ | 538 ⭐ |

## sort.map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.02M | 3.84M | 908k | 69.4k | 3.76k ✨ | 200 |
| Array | 42.4M ⭐ | 9.53M ⭐ | 1.70M ⭐ | 96.6k 🌠 | 4.36k 🌠 | 221 🌠 |
| Sequency | 21.2M ✨ | 5.97M ✨ | 1.02M ✨ | 70.7k ✨ | 3.76k | 202 ✨ |
| Lazy.js | 23.1M 🌠 | 7.88M 🌠 | 1.53M 🌠 | 113k ⭐ | 6.51k ⭐ | 496 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.31M | 1.88M | 758k | 70.9k ✨ | 3.85k | 200 ✨ |
| Array | 3.38M 🌠 | 2.41M 🌠 | 956k 🌠 | 80.6k 🌠 | 3.96k 🌠 | 208 🌠 |
| Sequency | 3.12M ✨ | 2.24M ✨ | 774k ✨ | 69.1k | 3.87k ✨ | 199 |
| Lazy.js | 6.95M ⭐ | 4.59M ⭐ | 1.42M ⭐ | 107k ⭐ | 6.29k ⭐ | 475 ⭐ |

## takeLast
Sequency doesn't have this, so using withIndex().filter() instead
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 11.8M | 7.61M ✨ | 7.61M ✨ | 3.17M ✨ | 456k ✨ | 48.1k 🌠 |
| Array | 42.4M ⭐ | 13.0M ⭐ | 11.5M ⭐ | 7.29M ⭐ | 1.36M ⭐ | 147k ⭐ |
| Sequency | 18.1M ✨ | 5.52M | 2.49M | 366k | 38.4k | 3.78k |
| Lazy.js | 20.2M 🌠 | 10.9M 🌠 | 11.0M 🌠 | 3.69M 🌠 | 466k 🌠 | 46.6k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.76M | 2.21M ✨ | 1.95M 🌠 | 753k ⭐ | 116k ⭐ | 12.6k ⭐ |
| Array | 3.28M 🌠 | 2.76M 🌠 | 1.90M ✨ | 487k 🌠 | 57.9k 🌠 | 5.99k 🌠 |
| Sequency | 3.08M ✨ | 2.10M | 1.41M | 311k | 36.5k | 3.76k |
| Lazy.js | 6.37M ⭐ | 4.14M ⭐ | 2.47M ⭐ | 399k ✨ | 42.4k ✨ | 4.34k ✨ |

## zipWithIndex
Sequency returns {value, index}, so additional mapping to [value, index] needed
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.54M | 1.93M | 1.12M | 221k | 25.0k | 2.43k |
| Array | 70.5M ⭐ | 8.67M ⭐ | 4.48M ⭐ | 1.82M ⭐ | 260k ⭐ | 28.4k ⭐ |
| Sequency | 25.2M ✨ | 5.62M ✨ | 1.74M ✨ | 262k ✨ | 27.1k ✨ | 2.54k ✨ |
| Lazy.js | 32.7M 🌠 | 6.50M 🌠 | 2.77M 🌠 | 571k 🌠 | 62.8k 🌠 | 6.29k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.56M | 1.30M | 879k | 218k | 26.0k | 2.75k ✨ |
| Array | 3.44M 🌠 | 2.26M 🌠 | 1.38M 🌠 | 379k ⭐ | 48.0k ⭐ | 4.83k ⭐ |
| Sequency | 3.34M ✨ | 2.19M ✨ | 1.13M ✨ | 235k ✨ | 27.1k ✨ | 2.71k |
| Lazy.js | 5.28M ⭐ | 4.59M ⭐ | 2.10M ⭐ | 320k 🌠 | 32.8k 🌠 | 3.27k 🌠 |

