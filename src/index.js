import { readFileSync } from 'fs';
import * as path from 'path';
import parse from './parser.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getData = (filepath) => readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath));
const getType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filePath1, filePath2, type = 'stylish') => {
  const data1 = parse(getData(filePath1), getType(filePath1));
  const data2 = parse(getData(filePath2), getType(filePath2));
  return format(buildTree(data1, data2), type);
};

export default genDiff;
