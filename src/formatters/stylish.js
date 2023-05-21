import _ from 'lodash';

const stepIndent = 4;
const getIndent = (depth) => ' '.repeat(depth * stepIndent);

const getValue = (node, depth) => {
  if (!_.isObject(node)) {
    return node;
  }
  const bracketEndIndent = getIndent(depth - 1);
  const lines = Object.entries(node).map(([key, value]) => `${getIndent(depth)}${key}: ${getValue(value, depth + 1)}`);

  return ['{', ...lines, `${bracketEndIndent}}`].join('\n');
};

const stylish = (data, depth = 1) => {
  const indent = getIndent(depth).slice(0, getIndent(depth) - 2);
  const bracketEndIndent = getIndent(depth - 1);
  const lines = data.flatMap(({
    type, key, children, value1, value2,
  }) => {
    switch (type) {
      case 'nested':
        return `${indent}  ${key}: ${stylish(children, depth + 1)}`;
      case 'added':
        return `${indent}+ ${key}: ${getValue(value2, depth + 1)}`;
      case 'deleted':
        return `${indent}- ${key}: ${getValue(value1, depth + 1)}`;
      case 'unchanged':
        return `${indent}  ${key}: ${getValue(value1, depth + 1)}`;
      case 'changed':
        return [
          `${indent}- ${key}: ${getValue(value1, depth + 1)}`,
          `${indent}+ ${key}: ${getValue(value2, depth + 1)}`,
        ];
      default:
        throw new Error(`Unknown type of data: ${type}`);
    }
  });
  return ['{', ...lines, `${bracketEndIndent}}`].join('\n');
};

export default stylish;
