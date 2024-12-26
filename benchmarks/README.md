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
| Fluent Streams | 9.4 kB 🌠 | 3.2 kB 🌠 |
| Array | 0 ⭐ | 0 ⭐ |
| Sequency | 25.7 kB ✨ | 4.4 kB ✨ |
| Lazy.js | 50.4 kB | 10 kB |

## at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.74M | 1.57M | 1.56M | 1.57M | 1.44M ✨ | 1.49M ✨ |
| Array | 83.8M ⭐ | 79.0M ⭐ | 76.9M ⭐ | 79.2M ⭐ | 79.1M ⭐ | 78.4M ⭐ |
| Sequency | 73.3M ✨ | 49.1M ✨ | 16.9M ✨ | 2.39M ✨ | 257k | 26.2k |
| Lazy.js | 81.8M 🌠 | 78.3M 🌠 | 76.8M 🌠 | 74.7M 🌠 | 76.5M 🌠 | 77.2M 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.13M | 1.17M | 1.08M | 907k ✨ | 309k 🌠 | 42.2k 🌠 |
| Array | 3.50M ✨ | 3.10M ✨ | 2.11M ✨ | 504k | 60.5k | 6.13k |
| Sequency | 3.79M 🌠 | 3.60M 🌠 | 3.08M 🌠 | 1.37M 🌠 | 215k ✨ | 23.3k ✨ |
| Lazy.js | 17.9M ⭐ | 17.6M ⭐ | 13.1M ⭐ | 3.67M ⭐ | 466k ⭐ | 43.4k ⭐ |

## butLast
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.87M | 6.88M | 1.84M | 282k | 29.7k ✨ | 3.02k ✨ |
| Array | 47.5M ⭐ | 46.9M ⭐ | 8.29M ⭐ | 1.46M ⭐ | 153k ⭐ | 15.9k ⭐ |
| Sequency | 25.3M ✨ | 22.6M ✨ | 2.93M ✨ | 323k ✨ | 27.8k | 2.83k |
| Lazy.js | 28.2M 🌠 | 28.4M 🌠 | 6.35M 🌠 | 984k 🌠 | 97.2k 🌠 | 10.7k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.44M | 1.42M | 935k | 239k | 28.5k | 2.91k |
| Array | 3.34M 🌠 | 2.98M ✨ | 1.98M 🌠 | 488k 🌠 | 60.5k 🌠 | 6.01k 🌠 |
| Sequency | 3.27M ✨ | 3.18M 🌠 | 1.52M ✨ | 294k ✨ | 33.9k ✨ | 3.61k ✨ |
| Lazy.js | 11.3M ⭐ | 8.48M ⭐ | 5.54M ⭐ | 957k ⭐ | 94.5k ⭐ | 10.3k ⭐ |

## concat
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.04M | 2.67M | 1.29M | 215k | 22.9k | 2.34k |
| Array | 8.21M 🌠 | 7.72M 🌠 | 4.89M 🌠 | 1.15M 🌠 | 126k 🌠 | 13.2k 🌠 |
| Sequency | 7.35M ✨ | 6.59M ✨ | 3.16M ✨ | 462k ✨ | 48.0k ✨ | 5.09k ✨ |
| Lazy.js | 11.4M ⭐ | 11.2M ⭐ | 9.53M ⭐ | 2.42M ⭐ | 251k ⭐ | 27.6k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.33M | 1.26M | 921k | 254k | 32.5k | 3.28k |
| Array | 2.42M ✨ | 2.25M ✨ | 1.57M ✨ | 398k 🌠 | 48.4k 🌠 | 4.90k ✨ |
| Sequency | 2.44M 🌠 | 2.32M 🌠 | 1.65M 🌠 | 394k ✨ | 46.8k ✨ | 5.14k 🌠 |
| Lazy.js | 4.98M ⭐ | 4.69M ⭐ | 3.09M ⭐ | 640k ⭐ | 71.0k ⭐ | 7.44k ⭐ |

## distinct
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.03M | 1.70M | 812k | 121k ✨ | 12.6k 🌠 | 1.09k 🌠 |
| Array | 29.5M ⭐ | 17.4M ⭐ | 4.09M 🌠 | 395k ⭐ | 30.7k ⭐ | 2.09k ⭐ |
| Sequency | 24.9M ✨ | 6.99M ✨ | 2.71M ✨ | 232k 🌠 | 7.06k ✨ | 92.7 |
| Lazy.js | 26.2M 🌠 | 16.0M 🌠 | 7.17M ⭐ | 66.9k | 5.86k | 371 ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.36M | 1.21M | 668k | 123k ✨ | 13.5k 🌠 | 1.10k 🌠 |
| Array | 3.13M ✨ | 2.64M 🌠 | 1.38M 🌠 | 211k ⭐ | 20.3k ⭐ | 1.54k ⭐ |
| Sequency | 3.41M 🌠 | 2.35M ✨ | 1.38M ⭐ | 182k 🌠 | 6.66k ✨ | 91.9 |
| Lazy.js | 8.42M ⭐ | 4.10M ⭐ | 786k ✨ | 66.5k | 5.83k | 352 ✨ |

## filter
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.09M | 2.00M | 1.23M | 253k | 30.0k | 3.13k |
| Array | 82.1M ⭐ | 78.3M ⭐ | 8.33M 🌠 | 2.27M 🌠 | 199k 🌠 | 13.3k 🌠 |
| Sequency | 24.0M ✨ | 19.9M ✨ | 3.95M ✨ | 574k ✨ | 58.9k ✨ | 5.38k ✨ |
| Lazy.js | 34.9M 🌠 | 34.0M 🌠 | 15.4M ⭐ | 3.84M ⭐ | 414k ⭐ | 19.1k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.36M | 1.21M | 1.08M | 294k | 35.4k | 3.72k |
| Array | 3.47M 🌠 | 3.06M 🌠 | 1.91M 🌠 | 450k ✨ | 53.4k 🌠 | 4.62k ✨ |
| Sequency | 3.34M ✨ | 2.48M ✨ | 1.82M ✨ | 480k 🌠 | 50.8k ✨ | 4.90k 🌠 |
| Lazy.js | 12.9M ⭐ | 12.1M ⭐ | 6.58M ⭐ | 1.35M ⭐ | 137k ⭐ | 8.00k ⭐ |

## find
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.60M | 1.56M | 1.36M | 623k | 98.2k ✨ | 10.8k ✨ |
| Array | 82.6M ⭐ | 81.6M ⭐ | 64.5M ⭐ | 16.1M ⭐ | 1.66M ⭐ | 171k ⭐ |
| Sequency | 30.5M ✨ | 20.5M ✨ | 5.79M ✨ | 758k ✨ | 78.2k | 7.88k |
| Lazy.js | 47.2M 🌠 | 35.5M 🌠 | 11.0M 🌠 | 1.67M 🌠 | 174k 🌠 | 17.4k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.14M | 1.13M | 1.01M | 534k ✨ | 98.8k 🌠 | 11.3k ⭐ |
| Array | 3.48M 🌠 | 3.05M ✨ | 2.06M ✨ | 484k | 57.9k | 5.81k |
| Sequency | 3.36M ✨ | 3.18M 🌠 | 2.26M 🌠 | 601k 🌠 | 71.6k ✨ | 7.49k ✨ |
| Lazy.js | 15.3M ⭐ | 13.4M ⭐ | 5.90M ⭐ | 1.01M ⭐ | 108k ⭐ | 11.0k 🌠 |

## flatMap
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.56M | 2.45M | 585k | 68.0k | 6.90k | 625 |
| Array | 30.8M ⭐ | 4.26M ✨ | 1.28M ⭐ | 152k ⭐ | 14.9k ⭐ | 1.38k ⭐ |
| Sequency | 23.2M 🌠 | 4.94M 🌠 | 947k ✨ | 97.1k ✨ | 9.25k ✨ | 939 ✨ |
| Lazy.js | 22.7M ✨ | 7.07M ⭐ | 1.10M 🌠 | 118k 🌠 | 11.7k 🌠 | 1.12k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.98M | 1.48M | 502k | 66.9k | 7.09k | 655 |
| Array | 3.21M ✨ | 1.76M ✨ | 781k 🌠 | 114k ⭐ | 12.0k ⭐ | 1.08k ⭐ |
| Sequency | 3.30M 🌠 | 2.08M 🌠 | 710k ✨ | 94.7k ✨ | 9.66k 🌠 | 927 🌠 |
| Lazy.js | 4.85M ⭐ | 3.16M ⭐ | 798k ⭐ | 94.9k 🌠 | 9.48k ✨ | 900 ✨ |

## groupBy
Using `Object.groupBy()` for Array
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.76M | 1.52M 🌠 | 623k 🌠 | 102k 🌠 | 11.0k 🌠 | 1.09k 🌠 |
| Array | 9.67M 🌠 | 1.37M ✨ | 355k | 50.6k | 8.07k | 990 |
| Sequency | 13.9M ⭐ | 1.74M ⭐ | 703k ⭐ | 109k ⭐ | 11.6k ⭐ | 1.04k ✨ |
| Lazy.js | 7.35M ✨ | 1.07M | 480k ✨ | 76.1k ✨ | 9.79k ✨ | 1.09k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.88M 🌠 | 1.03M ✨ | 539k 🌠 | 93.0k 🌠 | 10.2k 🌠 | 1.04k ✨ |
| Array | 2.84M ✨ | 856k | 304k | 46.2k | 7.25k | 899 |
| Sequency | 3.47M ⭐ | 1.24M 🌠 | 611k ⭐ | 101k ⭐ | 10.4k ⭐ | 1.04k 🌠 |
| Lazy.js | 1.75M | 1.24M ⭐ | 521k ✨ | 75.2k ✨ | 8.39k ✨ | 1.05k ⭐ |

## join
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 15.8M | 11.2M | 3.02M | 378k ✨ | 25.3k | 989 |
| Array | 73.3M ⭐ | 29.8M ⭐ | 4.52M ⭐ | 474k ⭐ | 39.1k ⭐ | 1.19k 🌠 |
| Sequency | 44.8M 🌠 | 24.3M 🌠 | 3.71M 🌠 | 351k | 29.2k ✨ | 1.12k ✨ |
| Lazy.js | 34.5M ✨ | 19.7M ✨ | 3.56M ✨ | 395k 🌠 | 29.2k 🌠 | 1.20k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.20M | 2.97M ✨ | 1.64M ✨ | 345k 🌠 | 29.2k ⭐ | 1.11k 🌠 |
| Array | 3.50M ✨ | 2.78M | 1.44M | 261k | 22.7k | 1.03k |
| Sequency | 3.70M 🌠 | 3.32M 🌠 | 1.74M 🌠 | 336k ✨ | 27.9k ✨ | 1.10k ✨ |
| Lazy.js | 11.2M ⭐ | 7.82M ⭐ | 2.57M ⭐ | 383k ⭐ | 29.1k 🌠 | 1.11k ⭐ |

## map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.59M | 2.78M | 1.17M | 182k | 19.1k | 1.93k |
| Array | 68.1M ⭐ | 10.7M 🌠 | 6.12M ⭐ | 1.10M ⭐ | 117k ⭐ | 12.4k ⭐ |
| Sequency | 24.0M ✨ | 7.02M ✨ | 2.60M ✨ | 323k ✨ | 33.1k ✨ | 3.47k ✨ |
| Lazy.js | 29.2M 🌠 | 14.1M ⭐ | 5.08M 🌠 | 661k 🌠 | 67.7k 🌠 | 6.98k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.39M | 1.26M | 869k | 225k | 27.0k | 2.70k |
| Array | 3.40M 🌠 | 2.35M ✨ | 1.52M 🌠 | 328k 🌠 | 39.0k 🌠 | 3.91k 🌠 |
| Sequency | 3.27M ✨ | 2.38M 🌠 | 1.45M ✨ | 276k ✨ | 31.6k ✨ | 3.37k ✨ |
| Lazy.js | 8.21M ⭐ | 6.97M ⭐ | 2.56M ⭐ | 415k ⭐ | 42.8k ⭐ | 4.44k ⭐ |

## reduce
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.59M | 1.58M | 1.28M | 501k | 70.5k | 7.59k |
| Array | 83.6M ⭐ | 76.9M ⭐ | 61.3M ⭐ | 14.1M ⭐ | 1.09M ⭐ | 104k ⭐ |
| Sequency | 55.6M 🌠 | 32.8M ✨ | 9.47M ✨ | 1.19M ✨ | 124k ✨ | 12.6k ✨ |
| Lazy.js | 39.5M ✨ | 39.1M 🌠 | 10.7M 🌠 | 1.32M 🌠 | 136k 🌠 | 13.7k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.14M | 1.13M | 987k | 462k | 74.9k ✨ | 8.22k 🌠 |
| Array | 3.62M ✨ | 3.14M ✨ | 2.09M ✨ | 487k ✨ | 57.8k | 5.72k |
| Sequency | 3.80M 🌠 | 3.52M 🌠 | 2.59M 🌠 | 802k ⭐ | 104k ⭐ | 11.2k ⭐ |
| Lazy.js | 12.4M ⭐ | 9.78M ⭐ | 4.44M ⭐ | 740k 🌠 | 79.6k 🌠 | 8.08k ✨ |

## sort.at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.19M | 998k | 549k | 67.5k | 3.88k | 200 |
| Array | 45.8M ⭐ | 37.4M ⭐ | 2.16M 🌠 | 104k 🌠 | 4.56k 🌠 | 214 🌠 |
| Sequency | 26.6M ✨ | 17.0M 🌠 | 1.65M ✨ | 89.8k ✨ | 4.26k ✨ | 210 ✨ |
| Lazy.js | 43.9M 🌠 | 15.4M ✨ | 2.41M ⭐ | 138k ⭐ | 7.43k ⭐ | 529 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 965k | 908k | 592k | 79.7k | 4.14k 🌠 | 203 |
| Array | 3.40M 🌠 | 3.01M ✨ | 1.14M 🌠 | 86.5k 🌠 | 3.98k | 203 ✨ |
| Sequency | 3.38M ✨ | 3.08M 🌠 | 1.06M ✨ | 81.6k ✨ | 4.14k ✨ | 209 🌠 |
| Lazy.js | 12.8M ⭐ | 7.50M ⭐ | 2.17M ⭐ | 132k ⭐ | 7.21k ⭐ | 520 ⭐ |

## sort.map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.06M | 1.45M | 482k | 50.4k | 2.92k | 179 |
| Array | 39.6M ⭐ | 9.27M ⭐ | 1.68M ⭐ | 93.3k 🌠 | 4.32k 🌠 | 216 🌠 |
| Sequency | 17.9M ✨ | 5.61M ✨ | 993k ✨ | 68.9k ✨ | 3.79k ✨ | 195 ✨ |
| Lazy.js | 20.7M 🌠 | 7.40M 🌠 | 1.57M 🌠 | 110k ⭐ | 6.63k ⭐ | 496 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.77M | 1.26M | 544k | 47.1k | 2.08k | 159 |
| Array | 3.33M 🌠 | 2.31M 🌠 | 685k ✨ | 77.6k 🌠 | 4.06k 🌠 | 202 🌠 |
| Sequency | 3.12M ✨ | 2.18M ✨ | 764k 🌠 | 63.3k ✨ | 3.77k ✨ | 200 ✨ |
| Lazy.js | 6.84M ⭐ | 4.50M ⭐ | 1.38M ⭐ | 105k ⭐ | 6.42k ⭐ | 485 ⭐ |

## takeLast
Sequency doesn't have this, so using withIndex().filter() instead
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.81M | 2.82M | 2.92M ✨ | 1.34M ✨ | 214k ✨ | 22.6k ✨ |
| Array | 43.9M ⭐ | 13.2M 🌠 | 13.1M 🌠 | 7.44M ⭐ | 1.41M ⭐ | 150k ⭐ |
| Sequency | 16.3M ✨ | 5.36M ✨ | 2.46M | 368k | 38.7k | 3.89k |
| Lazy.js | 25.5M 🌠 | 13.5M ⭐ | 13.8M ⭐ | 5.24M 🌠 | 695k 🌠 | 70.9k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.46M | 1.27M | 1.18M | 605k ⭐ | 107k ⭐ | 12.6k ⭐ |
| Array | 3.32M 🌠 | 2.80M 🌠 | 1.96M 🌠 | 487k 🌠 | 59.8k 🌠 | 6.10k 🌠 |
| Sequency | 3.07M ✨ | 2.14M ✨ | 1.43M ✨ | 312k | 37.4k | 3.87k |
| Lazy.js | 6.26M ⭐ | 4.13M ⭐ | 2.39M ⭐ | 399k ✨ | 42.1k ✨ | 4.19k ✨ |

## zipWithIndex
Sequency returns {value, index}, so additional mapping to [value, index] needed
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.71M | 2.92M | 1.32M | 251k | 27.8k | 2.81k |
| Array | 78.3M ⭐ | 9.74M ⭐ | 4.71M ⭐ | 1.92M ⭐ | 271k ⭐ | 28.9k ⭐ |
| Sequency | 29.5M ✨ | 6.80M ✨ | 2.57M ✨ | 473k ✨ | 51.0k ✨ | 4.68k ✨ |
| Lazy.js | 41.5M 🌠 | 8.22M 🌠 | 4.28M 🌠 | 1.63M 🌠 | 193k 🌠 | 18.6k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.44M | 1.18M | 783k | 218k | 27.7k | 2.76k |
| Array | 3.49M 🌠 | 2.32M 🌠 | 1.43M 🌠 | 389k 🌠 | 48.6k 🌠 | 4.89k 🌠 |
| Sequency | 3.39M ✨ | 2.27M ✨ | 1.40M ✨ | 382k ✨ | 48.0k ✨ | 4.68k ✨ |
| Lazy.js | 7.25M ⭐ | 6.89M ⭐ | 4.48M ⭐ | 895k ⭐ | 92.3k ⭐ | 8.89k ⭐ |
