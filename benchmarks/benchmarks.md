# Benchmarks
⭐ The fastest  
🌠 Second place  
✨ Third place

## at
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 20.7M | 14.1M ✨ | 11.2M ✨ |
| Array | 86.0M ⭐ | 72.3M ⭐ | 45.8M ⭐ |
| Sequency | 33.4M ✨ | 11.1M | 1.35M |
| Lazy.js | 79.4M 🌠 | 39.9M 🌠 | 29.8M 🌠 |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 1.61M ✨ | 1.55M 🌠 | 900k 🌠 |
| Array | 1.46M | 1.07M | 297k |
| Sequency | 1.69M 🌠 | 1.30M ✨ | 851k ✨ |
| Lazy.js | 7.92M ⭐ | 6.18M ⭐ | 2.72M ⭐ |

## append
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 4.92M ⭐ | 966k | 196k |
| Array | 2.10M ✨ | 2.62M 🌠 | 959k 🌠 |
| Sequency | 1.87M | 1.02M ✨ | 198k ✨ |
| Lazy.js | 2.88M 🌠 | 6.30M ⭐ | 1.50M ⭐ |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 760k | 524k | 190k ✨ |
| Array | 896k 🌠 | 567k ✨ | 229k 🌠 |
| Sequency | 894k ✨ | 609k 🌠 | 181k |
| Lazy.js | 1.53M ⭐ | 1.33M ⭐ | 498k ⭐ |

## appendAll
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 1.60M | 882k | 165k |
| Array | 2.48M 🌠 | 1.47M 🌠 | 322k 🌠 |
| Sequency | 1.72M ✨ | 1.01M ✨ | 189k ✨ |
| Lazy.js | 6.42M ⭐ | 5.58M ⭐ | 1.47M ⭐ |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 757k | 517k | 169k |
| Array | 918k 🌠 | 651k 🌠 | 226k 🌠 |
| Sequency | 797k ✨ | 555k ✨ | 179k ✨ |
| Lazy.js | 1.56M ⭐ | 1.27M ⭐ | 504k ⭐ |

## filter
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 10.1M | 6.29M ✨ | 1.72M ✨ |
| Array | 44.0M ⭐ | 32.6M ⭐ | 7.59M ⭐ |
| Sequency | 12.6M ✨ | 4.37M | 621k |
| Lazy.js | 32.5M 🌠 | 15.9M 🌠 | 3.42M 🌠 |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 1.39M ✨ | 1.23M ✨ | 551k 🌠 |
| Array | 1.25M | 1.00M | 288k |
| Sequency | 1.54M 🌠 | 1.28M 🌠 | 477k ✨ |
| Lazy.js | 6.27M ⭐ | 4.83M ⭐ | 1.12M ⭐ |

## flatMap
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 1.72M 🌠 | 431k ⭐ | 55.7k ⭐ |
| Array | 893k | 140k | 15.7k |
| Sequency | 1.54M ✨ | 423k 🌠 | 53.9k 🌠 |
| Lazy.js | 2.53M ⭐ | 376k ✨ | 40.6k ✨ |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 850k ✨ | 396k ⭐ | 54.6k ⭐ |
| Array | 487k | 126k | 15.2k |
| Sequency | 879k 🌠 | 326k 🌠 | 51.8k 🌠 |
| Lazy.js | 1.13M ⭐ | 319k ✨ | 38.3k ✨ |

## map
### Input is array
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 2.27M | 931k | 159k ✨ |
| Array | 3.66M 🌠 | 1.99M 🌠 | 335k 🌠 |
| Sequency | 2.69M ✨ | 1.04M ✨ | 158k |
| Lazy.js | 8.14M ⭐ | 2.82M ⭐ | 417k ⭐ |

### Input is iterable
| Lib | 1 | 10 | 100 |
|-----|---|----|-----|
| Fluent Streams | 975k | 651k 🌠 | 162k 🌠 |
| Array | 995k ✨ | 637k | 160k ✨ |
| Sequency | 1.01M 🌠 | 647k ✨ | 150k |
| Lazy.js | 3.22M ⭐ | 1.84M ⭐ | 358k ⭐ |

