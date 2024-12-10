import at from './at';
import butLast from './butLast';
import concat from './concat';
import distinct from './distinct';
import filter from './filter';
import find from './find';
import flatMap from './flatMap';
import join from './join';
import map from './map';
import reduce from './reduce';
import sortAt from './sort.at';
import sortMap from './sort.map';
import takeLast from './takeLast';
import zipWithIndex from './zipWithIndex';
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import { benchmarkSection } from './util/outMdElements';

if (process.argv.length !== 3) {
    throw new Error('Output file is not specified');
}
const outFile = path.resolve(process.argv[2])
console.log('Output file is ' + outFile);

fs.mkdirSync(path.dirname(outFile), {
    recursive: true,
});

fs.copyFileSync(path.resolve('src', 'benchmarks', 'util', 'intro.md'), outFile);

[at, butLast, concat, distinct, filter, find, flatMap, join, map, reduce, sortAt, sortMap, takeLast, zipWithIndex].forEach(benchmark =>
    fs.appendFileSync(outFile, benchmarkSection(benchmark()))
);
