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

## at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 17.3M | 17.1M | 16.7M ✨ | 16.4M ✨ | 16.6M ✨ | 17.6M ✨ |
| Array | 74.5M ⭐ | 63.9M ⭐ | 45.7M ⭐ | 66.8M ⭐ | 45.0M ⭐ | 46.3M ⭐ |
| Sequency | 43.4M ✨ | 29.1M ✨ | 10.8M | 1.61M | 186k | 18.8k |
| Lazy.js | 46.2M 🌠 | 44.7M 🌠 | 45.3M 🌠 | 44.4M 🌠 | 44.0M 🌠 | 45.2M 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.55M | 1.48M ✨ | 1.38M ✨ | 847k 🌠 | 195k 🌠 | 22.5k 🌠 |
| Array | 1.65M ✨ | 1.47M | 1.05M | 279k | 32.0k | 3.15k |
| Sequency | 1.79M 🌠 | 1.69M 🌠 | 1.50M 🌠 | 790k ✨ | 159k ✨ | 16.6k ✨ |
| Lazy.js | 7.95M ⭐ | 7.90M ⭐ | 6.07M ⭐ | 2.11M ⭐ | 311k ⭐ | 32.5k ⭐ |

## append
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 7.02M ⭐ | 6.45M ⭐ | 4.62M ⭐ | 758k 🌠 | 97.0k 🌠 | 10.1k 🌠 |
| Array | 4.47M 🌠 | 4.30M 🌠 | 3.85M 🌠 | 1.89M ⭐ | 409k ⭐ | 44.3k ⭐ |
| Sequency | 2.67M | 2.32M | 1.15M | 194k | 20.1k | 2.10k |
| Lazy.js | 3.31M ✨ | 3.09M ✨ | 1.82M ✨ | 298k ✨ | 31.1k ✨ | 3.22k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.23M 🌠 | 1.18M 🌠 | 939k 🌠 | 354k 🌠 | 42.9k 🌠 | 5.02k 🌠 |
| Array | 821k | 782k | 593k | 209k ✨ | 26.2k ✨ | 2.64k ✨ |
| Sequency | 989k ✨ | 955k ✨ | 674k ✨ | 170k | 19.2k | 2.07k |
| Lazy.js | 1.69M ⭐ | 1.62M ⭐ | 1.32M ⭐ | 457k ⭐ | 65.7k ⭐ | 7.44k ⭐ |

## appendAll
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.53M | 1.36M | 845k | 165k | 17.8k | 1.88k |
| Array | 2.51M 🌠 | 2.28M 🌠 | 1.51M 🌠 | 303k 🌠 | 34.8k 🌠 | 3.53k 🌠 |
| Sequency | 1.83M ✨ | 1.74M ✨ | 949k ✨ | 182k ✨ | 19.4k ✨ | 2.03k ✨ |
| Lazy.js | 6.85M ⭐ | 6.59M ⭐ | 5.03M ⭐ | 1.12M ⭐ | 141k ⭐ | 15.1k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 768k | 719k | 537k | 143k | 16.6k | 1.79k |
| Array | 931k 🌠 | 891k 🌠 | 648k 🌠 | 208k 🌠 | 25.9k 🌠 | 2.62k 🌠 |
| Sequency | 901k ✨ | 857k ✨ | 610k ✨ | 173k ✨ | 19.5k ✨ | 2.06k ✨ |
| Lazy.js | 1.54M ⭐ | 1.44M ⭐ | 1.22M ⭐ | 440k ⭐ | 71.1k ⭐ | 7.58k ⭐ |

## butLast
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 8.12M | 7.77M ✨ | 1.30M ✨ | 200k ✨ | 21.4k ✨ | 2.15k ✨ |
| Array | 26.4M ⭐ | 25.2M ⭐ | 2.49M 🌠 | 354k 🌠 | 36.5k 🌠 | 3.72k 🌠 |
| Sequency | 8.63M ✨ | 3.35M | 214k | 40.0k | 6.92k | 1.27k |
| Lazy.js | 15.9M 🌠 | 15.8M 🌠 | 6.92M ⭐ | 1.26M ⭐ | 140k ⭐ | 15.4k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.34M | 1.33M ✨ | 649k ✨ | 164k ✨ | 17.8k ✨ | 1.89k ✨ |
| Array | 1.48M 🌠 | 1.34M 🌠 | 887k 🌠 | 274k 🌠 | 32.1k 🌠 | 3.10k 🌠 |
| Sequency | 1.39M ✨ | 1.21M | 586k | 129k | 14.6k | 1.52k |
| Lazy.js | 4.81M ⭐ | 3.49M ⭐ | 2.49M ⭐ | 502k ⭐ | 59.5k ⭐ | 6.06k ⭐ |

## distinct
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 4.56M | 1.77M | 587k | 76.2k ✨ | 6.92k 🌠 | 534 🌠 |
| Array | 8.62M ✨ | 4.54M 🌠 | 1.00M 🌠 | 136k ⭐ | 12.1k ⭐ | 760 ⭐ |
| Sequency | 11.6M 🌠 | 2.26M ✨ | 974k ✨ | 88.5k 🌠 | 2.23k | 26.5 |
| Lazy.js | 12.1M ⭐ | 7.20M ⭐ | 3.75M ⭐ | 35.4k | 3.18k ✨ | 180 ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.26M | 816k | 385k ✨ | 74.6k ✨ | 7.77k 🌠 | 557 🌠 |
| Array | 1.37M ✨ | 1.05M 🌠 | 469k 🌠 | 90.6k ⭐ | 8.66k ⭐ | 613 ⭐ |
| Sequency | 1.55M 🌠 | 917k ✨ | 533k ⭐ | 77.4k 🌠 | 2.17k | 26.2 |
| Lazy.js | 3.26M ⭐ | 1.58M ⭐ | 336k | 33.8k | 2.91k ✨ | 187 ✨ |

## filter
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.13M | 5.95M ✨ | 1.18M | 294k | 34.4k ✨ | 3.24k ✨ |
| Array | 46.5M ⭐ | 4.22M | 2.83M 🌠 | 668k 🌠 | 80.6k 🌠 | 5.69k 🌠 |
| Sequency | 10.5M ✨ | 9.09M 🌠 | 1.49M ✨ | 346k ✨ | 30.9k | 2.97k |
| Lazy.js | 12.5M 🌠 | 12.2M ⭐ | 6.22M ⭐ | 1.64M ⭐ | 191k ⭐ | 10.3k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.34M | 1.30M ✨ | 726k | 241k ✨ | 26.8k | 2.77k ✨ |
| Array | 1.61M 🌠 | 1.44M 🌠 | 911k 🌠 | 255k 🌠 | 27.4k ✨ | 2.49k |
| Sequency | 1.53M ✨ | 1.04M | 765k ✨ | 226k | 28.1k 🌠 | 2.85k 🌠 |
| Lazy.js | 4.77M ⭐ | 4.49M ⭐ | 2.65M ⭐ | 691k ⭐ | 75.1k ⭐ | 5.83k ⭐ |

## find
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 9.19M | 8.86M | 5.38M 🌠 | 1.17M 🌠 | 158k 🌠 | 15.9k 🌠 |
| Array | 48.5M ⭐ | 46.0M ⭐ | 36.6M ⭐ | 10.2M ⭐ | 1.52M ⭐ | 167k ⭐ |
| Sequency | 14.8M ✨ | 10.4M ✨ | 3.15M | 432k | 52.5k | 5.33k |
| Lazy.js | 27.2M 🌠 | 18.5M 🌠 | 5.33M ✨ | 715k ✨ | 86.9k ✨ | 8.91k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.44M | 1.42M ✨ | 1.16M 🌠 | 505k 🌠 | 91.9k ⭐ | 9.73k ⭐ |
| Array | 1.48M ✨ | 1.39M | 965k | 281k | 31.2k | 3.05k |
| Sequency | 1.59M 🌠 | 1.54M 🌠 | 1.12M ✨ | 389k ✨ | 51.9k ✨ | 5.29k ✨ |
| Lazy.js | 6.41M ⭐ | 5.62M ⭐ | 2.84M ⭐ | 518k ⭐ | 64.6k 🌠 | 6.50k 🌠 |

## flatMap
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 4.68M | 416k | 154k ✨ | 27.7k ✨ | 3.50k ✨ | 401 ⭐ |
| Array | 14.4M ⭐ | 849k ✨ | 137k | 14.8k | 1.48k | 139 |
| Sequency | 9.82M ✨ | 1.60M 🌠 | 374k 🌠 | 42.1k 🌠 | 4.25k 🌠 | 350 ✨ |
| Lazy.js | 10.5M 🌠 | 2.31M ⭐ | 408k ⭐ | 43.8k ⭐ | 4.32k ⭐ | 393 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.34M | 748k ✨ | 340k ⭐ | 48.3k ⭐ | 5.03k ⭐ | 404 ⭐ |
| Array | 1.39M ✨ | 498k | 124k | 14.7k | 1.48k | 139 |
| Sequency | 1.48M 🌠 | 801k 🌠 | 302k 🌠 | 40.6k 🌠 | 4.18k 🌠 | 351 🌠 |
| Lazy.js | 1.55M ⭐ | 1.02M ⭐ | 299k ✨ | 35.4k ✨ | 3.61k ✨ | 315 ✨ |

## join
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 12.8M | 8.57M | 1.24M | 170k | 12.2k | 397 |
| Array | 41.8M ⭐ | 16.0M ⭐ | 2.15M ⭐ | 254k ⭐ | 17.2k ⭐ | 553 ⭐ |
| Sequency | 25.3M 🌠 | 14.0M 🌠 | 1.50M ✨ | 199k 🌠 | 13.4k ✨ | 481 ✨ |
| Lazy.js | 20.2M ✨ | 10.4M ✨ | 1.51M 🌠 | 187k ✨ | 15.3k 🌠 | 540 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.55M | 1.41M ✨ | 716k ✨ | 164k 🌠 | 12.4k ✨ | 461 |
| Array | 1.59M ✨ | 1.30M | 661k | 137k | 11.3k | 472 ✨ |
| Sequency | 1.67M 🌠 | 1.48M 🌠 | 756k 🌠 | 174k ⭐ | 14.2k ⭐ | 481 🌠 |
| Lazy.js | 4.15M ⭐ | 2.59M ⭐ | 949k ⭐ | 155k ✨ | 13.6k 🌠 | 485 ⭐ |

## map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 7.70M | 2.33M ✨ | 1.05M ✨ | 167k ✨ | 17.5k ✨ | 1.84k ✨ |
| Array | 38.4M ⭐ | 3.69M 🌠 | 1.99M ⭐ | 347k ⭐ | 36.2k ⭐ | 3.62k ⭐ |
| Sequency | 9.89M ✨ | 2.26M | 834k | 122k | 12.3k | 1.27k |
| Lazy.js | 11.6M 🌠 | 5.47M ⭐ | 1.97M 🌠 | 303k 🌠 | 30.7k 🌠 | 3.11k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.35M | 912k | 628k 🌠 | 154k 🌠 | 17.0k 🌠 | 1.80k 🌠 |
| Array | 1.57M 🌠 | 966k 🌠 | 602k ✨ | 148k ✨ | 16.4k ✨ | 1.64k ✨ |
| Sequency | 1.45M ✨ | 938k ✨ | 533k | 117k | 12.4k | 1.30k |
| Lazy.js | 3.15M ⭐ | 2.77M ⭐ | 1.38M ⭐ | 260k ⭐ | 27.6k ⭐ | 2.69k ⭐ |

## reduce
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 9.92M | 9.73M | 8.40M 🌠 | 3.93M 🌠 | 678k 🌠 | 84.0k 🌠 |
| Array | 47.6M ⭐ | 40.9M ⭐ | 33.5M ⭐ | 7.01M ⭐ | 763k ⭐ | 85.0k ⭐ |
| Sequency | 34.0M 🌠 | 18.5M 🌠 | 5.36M ✨ | 731k ✨ | 86.4k ✨ | 8.60k ✨ |
| Lazy.js | 16.2M ✨ | 16.5M ✨ | 4.35M | 580k | 70.0k | 7.10k |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.35M | 1.31M | 952k | 342k ✨ | 44.1k ✨ | 4.63k ✨ |
| Array | 1.51M ✨ | 1.39M ✨ | 954k ✨ | 280k | 32.4k | 3.14k |
| Sequency | 1.68M 🌠 | 1.56M 🌠 | 1.22M 🌠 | 442k ⭐ | 74.6k ⭐ | 7.84k ⭐ |
| Lazy.js | 5.34M ⭐ | 4.49M ⭐ | 2.28M ⭐ | 420k 🌠 | 52.9k 🌠 | 5.38k 🌠 |

## sort.at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 4.74M | 2.70M | 670k | 46.9k ✨ | 2.29k ✨ | 110 ✨ |
| Array | 27.3M ⭐ | 21.8M ⭐ | 1.22M ⭐ | 51.0k 🌠 | 2.46k 🌠 | 113 🌠 |
| Sequency | 14.4M ✨ | 8.93M 🌠 | 766k ✨ | 43.6k | 2.18k | 104 |
| Lazy.js | 27.0M 🌠 | 5.10M ✨ | 944k 🌠 | 78.7k ⭐ | 4.76k ⭐ | 350 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.23M | 890k | 374k | 38.0k | 2.25k | 108 ✨ |
| Array | 1.54M 🌠 | 1.39M 🌠 | 496k 🌠 | 44.3k 🌠 | 2.32k 🌠 | 107 |
| Sequency | 1.43M ✨ | 1.31M ✨ | 418k ✨ | 41.2k ✨ | 2.29k ✨ | 110 🌠 |
| Lazy.js | 4.80M ⭐ | 2.75M ⭐ | 905k ⭐ | 81.1k ⭐ | 4.80k ⭐ | 356 ⭐ |

## sort.map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.09M | 1.26M | 394k ✨ | 36.3k ✨ | 2.04k ✨ | 104 ✨ |
| Array | 23.4M ⭐ | 3.27M ⭐ | 685k ⭐ | 45.9k 🌠 | 2.35k 🌠 | 109 🌠 |
| Sequency | 7.14M ✨ | 1.73M ✨ | 387k | 33.5k | 1.97k | 102 |
| Lazy.js | 8.18M 🌠 | 2.50M 🌠 | 645k 🌠 | 63.2k ⭐ | 4.16k ⭐ | 332 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.04M | 587k | 308k | 32.1k | 1.91k | 102 ✨ |
| Array | 1.36M 🌠 | 835k 🌠 | 392k 🌠 | 39.4k 🌠 | 2.04k 🌠 | 104 🌠 |
| Sequency | 1.32M ✨ | 807k ✨ | 331k ✨ | 32.5k ✨ | 1.94k ✨ | 97.9 |
| Lazy.js | 2.43M ⭐ | 1.64M ⭐ | 630k ⭐ | 64.9k ⭐ | 4.19k ⭐ | 325 ⭐ |

## takeLast
Sequency doesn't have this, so using withIndex().filter() instead
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 7.16M ✨ | 2.28M ✨ | 2.33M ✨ | 1.18M ✨ | 186k ✨ | 19.0k ✨ |
| Array | 22.3M ⭐ | 4.55M 🌠 | 4.47M 🌠 | 2.46M ⭐ | 377k ⭐ | 40.6k ⭐ |
| Sequency | 6.57M | 1.76M | 994k | 195k | 21.0k | 2.16k |
| Lazy.js | 10.4M 🌠 | 5.41M ⭐ | 5.45M ⭐ | 2.04M 🌠 | 319k 🌠 | 33.5k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.41M ✨ | 796k | 610k | 280k ⭐ | 38.4k ⭐ | 3.94k ⭐ |
| Array | 1.50M 🌠 | 1.21M 🌠 | 869k 🌠 | 277k 🌠 | 33.6k 🌠 | 3.43k 🌠 |
| Sequency | 1.37M | 852k ✨ | 610k ✨ | 181k | 21.4k | 2.27k |
| Lazy.js | 2.31M ⭐ | 1.64M ⭐ | 1.06M ⭐ | 238k ✨ | 26.7k ✨ | 2.74k ✨ |

## zipWithIndex
Sequency returns {value, index}, so additional mapping to [value, index] needed
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 8.40M ✨ | 2.14M ✨ | 954k 🌠 | 300k 🌠 | 36.4k 🌠 | 3.60k 🌠 |
| Array | 39.8M ⭐ | 3.45M ⭐ | 1.59M ⭐ | 673k ⭐ | 104k ⭐ | 10.4k ⭐ |
| Sequency | 7.91M | 1.82M | 607k | 118k | 12.4k | 1.20k |
| Lazy.js | 12.2M 🌠 | 2.34M 🌠 | 914k ✨ | 260k ✨ | 29.6k ✨ | 3.14k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.35M | 980k 🌠 | 637k 🌠 | 169k ✨ | 18.8k ✨ | 1.94k ✨ |
| Array | 1.52M 🌠 | 936k ✨ | 541k ✨ | 199k 🌠 | 25.0k 🌠 | 2.40k 🌠 |
| Sequency | 1.44M ✨ | 840k | 432k | 112k | 12.9k | 1.26k |
| Lazy.js | 2.45M ⭐ | 2.10M ⭐ | 1.18M ⭐ | 259k ⭐ | 28.1k ⭐ | 2.83k ⭐ |
