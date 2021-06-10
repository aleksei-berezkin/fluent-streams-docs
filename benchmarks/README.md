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
| Fluent Streams | 22.8kB 🌠 | 4.1kB 🌠 |
| Array | 0 ⭐ | 0 ⭐ |
| Sequency | 25.7kB ✨ | 4.4kB ✨ |
| Lazy.js | 50.4kB | 10kB |

## at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 18.8M | 17.6M | 17.5M ✨ | 18.8M ✨ | 18.3M ✨ | 17.8M ✨ |
| Array | 73.6M ⭐ | 68.4M ⭐ | 68.3M ⭐ | 66.2M ⭐ | 67.7M ⭐ | 65.1M ⭐ |
| Sequency | 59.2M 🌠 | 33.0M ✨ | 10.6M | 1.58M | 181k | 18.4k |
| Lazy.js | 44.5M ✨ | 45.3M 🌠 | 42.8M 🌠 | 45.2M 🌠 | 45.5M 🌠 | 45.2M 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.69M | 1.69M 🌠 | 1.53M 🌠 | 928k 🌠 | 210k 🌠 | 23.4k 🌠 |
| Array | 1.71M ✨ | 1.53M | 1.07M | 287k | 34.0k | 3.41k |
| Sequency | 1.75M 🌠 | 1.68M ✨ | 1.46M ✨ | 747k ✨ | 148k ✨ | 14.7k ✨ |
| Lazy.js | 7.77M ⭐ | 7.42M ⭐ | 5.85M ⭐ | 2.06M ⭐ | 305k ⭐ | 31.6k ⭐ |

## append
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.51M 🌠 | 4.98M 🌠 | 2.70M 🌠 | 453k 🌠 | 52.0k 🌠 | 5.62k 🌠 |
| Array | 5.62M ⭐ | 5.29M ⭐ | 4.74M ⭐ | 2.17M ⭐ | 397k ⭐ | 43.5k ⭐ |
| Sequency | 2.98M | 2.58M | 1.26M | 192k | 20.0k | 2.10k |
| Lazy.js | 3.38M ✨ | 3.19M ✨ | 1.94M ✨ | 302k ✨ | 28.6k ✨ | 3.28k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.30M 🌠 | 1.29M 🌠 | 991k 🌠 | 364k 🌠 | 43.4k 🌠 | 4.83k 🌠 |
| Array | 963k | 862k | 609k | 207k ✨ | 26.1k ✨ | 2.61k ✨ |
| Sequency | 1.03M ✨ | 987k ✨ | 660k ✨ | 171k | 19.2k | 2.04k |
| Lazy.js | 1.68M ⭐ | 1.78M ⭐ | 1.37M ⭐ | 475k ⭐ | 68.6k ⭐ | 7.54k ⭐ |

## appendAll
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.75M | 1.60M | 965k | 181k | 19.8k | 2.05k ✨ |
| Array | 2.75M 🌠 | 2.52M 🌠 | 1.63M 🌠 | 340k 🌠 | 37.5k 🌠 | 3.70k 🌠 |
| Sequency | 1.97M ✨ | 1.80M ✨ | 1.04M ✨ | 183k ✨ | 20.0k ✨ | 1.99k |
| Lazy.js | 7.80M ⭐ | 7.37M ⭐ | 5.47M ⭐ | 1.13M ⭐ | 137k ⭐ | 14.5k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 829k | 804k | 613k | 169k | 19.8k ✨ | 2.08k |
| Array | 960k 🌠 | 919k 🌠 | 662k 🌠 | 212k 🌠 | 26.5k 🌠 | 2.66k 🌠 |
| Sequency | 843k ✨ | 835k ✨ | 631k ✨ | 174k ✨ | 19.3k | 2.11k ✨ |
| Lazy.js | 1.57M ⭐ | 1.51M ⭐ | 1.25M ⭐ | 441k ⭐ | 70.6k ⭐ | 7.56k ⭐ |

## butLast
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.55M | 6.45M | 1.25M ✨ | 201k ✨ | 20.5k ✨ | 2.18k ✨ |
| Array | 26.8M ⭐ | 26.3M ⭐ | 2.74M 🌠 | 374k 🌠 | 40.6k 🌠 | 3.95k 🌠 |
| Sequency | 9.94M ✨ | 9.03M ✨ | 1.11M | 150k | 15.4k | 1.58k |
| Lazy.js | 15.8M 🌠 | 16.0M 🌠 | 7.67M ⭐ | 1.29M ⭐ | 141k ⭐ | 15.4k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.38M | 1.41M ✨ | 736k ✨ | 177k ✨ | 20.4k ✨ | 2.19k ✨ |
| Array | 1.45M 🌠 | 1.33M | 904k 🌠 | 252k 🌠 | 28.4k 🌠 | 2.99k 🌠 |
| Sequency | 1.44M ✨ | 1.44M 🌠 | 637k | 135k | 14.7k | 1.56k |
| Lazy.js | 5.00M ⭐ | 3.82M ⭐ | 2.66M ⭐ | 499k ⭐ | 59.4k ⭐ | 6.05k ⭐ |

## distinct
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.03M | 2.00M | 604k | 79.2k ✨ | 7.92k 🌠 | 577 🌠 |
| Array | 8.64M ✨ | 4.85M 🌠 | 1.01M ✨ | 133k ⭐ | 11.7k ⭐ | 750 ⭐ |
| Sequency | 13.2M ⭐ | 2.48M ✨ | 1.07M 🌠 | 91.5k 🌠 | 2.30k | 25.9 |
| Lazy.js | 12.0M 🌠 | 8.20M ⭐ | 3.90M ⭐ | 34.4k | 3.12k ✨ | 176 ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.32M | 931k | 423k ✨ | 77.2k 🌠 | 8.24k 🌠 | 587 🌠 |
| Array | 1.38M 🌠 | 1.10M 🌠 | 495k 🌠 | 91.2k ⭐ | 8.69k ⭐ | 605 ⭐ |
| Sequency | 1.36M ✨ | 949k ✨ | 530k ⭐ | 75.0k ✨ | 2.14k | 25.3 |
| Lazy.js | 3.35M ⭐ | 1.69M ⭐ | 360k | 32.2k | 3.02k ✨ | 130 ✨ |

## filter
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 6.79M | 2.49M | 1.66M | 367k ✨ | 41.6k ✨ | 3.67k ✨ |
| Array | 46.8M ⭐ | 4.33M ✨ | 3.01M 🌠 | 586k 🌠 | 77.5k 🌠 | 5.64k 🌠 |
| Sequency | 12.8M ✨ | 10.8M ⭐ | 1.66M ✨ | 354k | 30.8k | 2.96k |
| Lazy.js | 12.8M 🌠 | 8.68M 🌠 | 6.11M ⭐ | 1.64M ⭐ | 192k ⭐ | 10.2k ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.30M | 970k | 739k | 280k 🌠 | 30.1k 🌠 | 3.08k 🌠 |
| Array | 1.59M 🌠 | 1.34M 🌠 | 935k 🌠 | 252k ✨ | 26.7k | 2.44k |
| Sequency | 1.55M ✨ | 1.08M ✨ | 764k ✨ | 237k | 28.1k ✨ | 2.88k ✨ |
| Lazy.js | 4.88M ⭐ | 3.97M ⭐ | 2.65M ⭐ | 671k ⭐ | 73.2k ⭐ | 5.85k ⭐ |

## find
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 9.21M | 8.90M | 6.67M 🌠 | 1.67M 🌠 | 233k 🌠 | 23.2k 🌠 |
| Array | 51.3M ⭐ | 44.8M ⭐ | 36.0M ⭐ | 9.89M ⭐ | 1.48M ⭐ | 161k ⭐ |
| Sequency | 16.5M ✨ | 11.2M ✨ | 3.29M | 439k | 48.2k | 4.88k |
| Lazy.js | 27.7M 🌠 | 18.7M 🌠 | 5.25M ✨ | 716k ✨ | 85.5k ✨ | 8.47k ✨ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.44M | 1.42M ✨ | 1.23M 🌠 | 524k 🌠 | 93.4k ⭐ | 9.74k ⭐ |
| Array | 1.56M 🌠 | 1.39M | 974k | 273k | 31.4k | 3.00k |
| Sequency | 1.49M ✨ | 1.49M 🌠 | 1.09M ✨ | 385k ✨ | 50.4k ✨ | 5.21k ✨ |
| Lazy.js | 6.39M ⭐ | 5.54M ⭐ | 2.82M ⭐ | 526k ⭐ | 62.9k 🌠 | 6.50k 🌠 |

## flatMap
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.87M | 1.57M ✨ | 389k 🌠 | 51.3k ⭐ | 5.25k ⭐ | 433 ⭐ |
| Array | 13.6M ⭐ | 848k | 133k | 14.4k | 1.47k | 138 |
| Sequency | 10.5M 🌠 | 1.66M 🌠 | 372k ✨ | 41.0k ✨ | 4.09k ✨ | 353 ✨ |
| Lazy.js | 9.67M ✨ | 2.41M ⭐ | 390k ⭐ | 42.5k 🌠 | 4.16k 🌠 | 384 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.35M | 850k 🌠 | 385k ⭐ | 52.3k ⭐ | 5.49k ⭐ | 430 ⭐ |
| Array | 1.42M ✨ | 499k | 127k | 14.5k | 1.47k | 138 |
| Sequency | 1.46M 🌠 | 802k ✨ | 304k 🌠 | 40.3k 🌠 | 4.15k 🌠 | 350 🌠 |
| Lazy.js | 1.47M ⭐ | 1.03M ⭐ | 285k ✨ | 35.6k ✨ | 3.63k ✨ | 318 ✨ |

## join
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 14.5M | 9.08M | 1.22M | 158k | 11.1k | 434 |
| Array | 41.8M ⭐ | 17.4M ⭐ | 2.30M ⭐ | 227k ⭐ | 18.1k ⭐ | 550 ⭐ |
| Sequency | 25.5M 🌠 | 13.2M 🌠 | 1.49M ✨ | 189k ✨ | 13.3k ✨ | 441 ✨ |
| Lazy.js | 18.5M ✨ | 10.7M ✨ | 1.50M 🌠 | 199k 🌠 | 13.6k 🌠 | 538 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.53M | 1.37M ✨ | 691k ✨ | 148k ✨ | 12.4k ✨ | 465 🌠 |
| Array | 1.56M ✨ | 1.31M | 659k | 136k | 11.6k | 452 |
| Sequency | 1.61M 🌠 | 1.50M 🌠 | 758k 🌠 | 169k 🌠 | 13.1k 🌠 | 453 ✨ |
| Lazy.js | 4.28M ⭐ | 2.58M ⭐ | 965k ⭐ | 171k ⭐ | 13.2k ⭐ | 484 ⭐ |

## map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 5.94M | 2.19M | 959k ✨ | 160k ✨ | 16.2k ✨ | 1.73k ✨ |
| Array | 38.8M ⭐ | 4.03M 🌠 | 1.98M 🌠 | 341k ⭐ | 35.6k ⭐ | 3.57k ⭐ |
| Sequency | 9.76M ✨ | 2.32M ✨ | 840k | 119k | 12.3k | 1.24k |
| Lazy.js | 12.1M 🌠 | 6.07M ⭐ | 2.08M ⭐ | 296k 🌠 | 29.8k 🌠 | 3.15k 🌠 |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.37M | 966k ✨ | 650k 🌠 | 157k 🌠 | 18.5k 🌠 | 1.98k 🌠 |
| Array | 1.51M 🌠 | 997k 🌠 | 648k ✨ | 155k ✨ | 17.0k ✨ | 1.68k ✨ |
| Sequency | 1.45M ✨ | 955k | 560k | 117k | 12.3k | 1.32k |
| Lazy.js | 3.40M ⭐ | 3.00M ⭐ | 1.45M ⭐ | 262k ⭐ | 27.6k ⭐ | 2.73k ⭐ |

## reduce
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 10.4M | 10.5M | 8.47M 🌠 | 3.25M 🌠 | 453k 🌠 | 54.1k 🌠 |
| Array | 50.4M ⭐ | 42.9M ⭐ | 34.8M ⭐ | 7.05M ⭐ | 779k ⭐ | 84.3k ⭐ |
| Sequency | 34.2M 🌠 | 18.2M 🌠 | 5.49M ✨ | 668k ✨ | 77.2k ✨ | 7.65k ✨ |
| Lazy.js | 13.8M ✨ | 13.3M ✨ | 4.01M | 564k | 68.0k | 6.73k |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.43M | 1.32M | 1.12M ✨ | 448k ⭐ | 79.5k ⭐ | 8.28k ⭐ |
| Array | 1.55M ✨ | 1.36M ✨ | 957k | 267k | 31.5k | 3.05k |
| Sequency | 1.67M 🌠 | 1.57M 🌠 | 1.21M 🌠 | 439k 🌠 | 73.2k 🌠 | 7.60k 🌠 |
| Lazy.js | 4.37M ⭐ | 3.72M ⭐ | 2.03M ⭐ | 412k ✨ | 52.6k ✨ | 5.30k ✨ |

## sort.at
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 3.65M | 2.25M | 630k | 45.1k | 2.22k | 111 ✨ |
| Array | 27.2M 🌠 | 21.5M ⭐ | 1.08M ⭐ | 51.2k 🌠 | 2.36k ✨ | 110 |
| Sequency | 14.8M ✨ | 9.00M 🌠 | 761k ✨ | 46.0k ✨ | 2.38k 🌠 | 111 🌠 |
| Lazy.js | 27.4M ⭐ | 5.12M ✨ | 938k 🌠 | 78.3k ⭐ | 4.81k ⭐ | 360 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.30M | 968k | 413k | 41.0k | 2.24k 🌠 | 108 ✨ |
| Array | 1.52M 🌠 | 1.37M ✨ | 501k 🌠 | 42.6k 🌠 | 2.16k | 106 |
| Sequency | 1.48M ✨ | 1.39M 🌠 | 444k ✨ | 41.1k ✨ | 2.20k ✨ | 109 🌠 |
| Lazy.js | 5.04M ⭐ | 2.82M ⭐ | 945k ⭐ | 82.1k ⭐ | 4.89k ⭐ | 365 ⭐ |

## sort.map
### Input is array
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 2.68M | 1.16M | 384k | 35.6k ✨ | 2.06k ✨ | 102 ✨ |
| Array | 23.0M ⭐ | 3.49M ⭐ | 703k ⭐ | 44.2k 🌠 | 2.17k 🌠 | 103 🌠 |
| Sequency | 7.36M ✨ | 1.86M ✨ | 390k ✨ | 33.7k | 1.83k | 97.4 |
| Lazy.js | 8.15M 🌠 | 2.67M 🌠 | 674k 🌠 | 64.7k ⭐ | 4.22k ⭐ | 335 ⭐ |

### Input is iterable
| Lib | 0 | 1 | 10 | 100 | 1000 | 10000 |
|---|---|---|---|---|---|---|
| Fluent Streams | 1.11M | 639k | 307k | 33.5k ✨ | 1.93k ✨ | 97.9 |
| Array | 1.55M 🌠 | 992k 🌠 | 416k 🌠 | 38.5k 🌠 | 1.99k 🌠 | 105 🌠 |
| Sequency | 1.35M ✨ | 838k ✨ | 336k ✨ | 31.9k | 1.92k | 103 ✨ |
| Lazy.js | 2.62M ⭐ | 1.68M ⭐ | 632k ⭐ | 64.6k ⭐ | 4.23k ⭐ | 332 ⭐ |

