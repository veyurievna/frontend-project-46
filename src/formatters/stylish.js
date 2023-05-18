import _ from 'lodash';

const spacesCount = 4;
const replacer = ' ';

const getIndentation = (depth, count) => replacer.repeat(depth * spacesCount - count);

const getTwoSpaces = (depth) => getIndentation(depth, 2);
const getFourSpaces = (depth) => getIndentation(depth, 0);
const getSixSpaces = (depth) => getIndentation(depth, 2);
const getEightSpaces = (depth) => getIndentation(depth, 0);

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) {
    return String(data);
  }
  const lines = Object.entries(data).map(([key, value]) => {
    const indentation = getFourSpaces(depth + 1);
    const nestedValue = stringify(value, depth + 1);
    return `${indentation}${key}: ${nestedValue}`;
  });
  return `{\n${lines.join('\n')}\n${getFourSpaces(depth)}}`;
};

const iter = (diff, depth = 1) => diff.map((node) => {
  switch (node.type) {
    case 'deleted': {
      const indentation = getTwoSpaces(depth);
      const value = stringify(node.value, depth);
      return `${indentation}- ${node.key}: ${value}`;
    }
    case 'added': {
      const indentation = getTwoSpaces(depth);
      const value = stringify(node.value, depth);
      return `${indentation}+ ${node.key}: ${value}`;
    }
    case 'changed': {
      const indentation = getTwoSpaces(depth);
      const value1 = stringify(node.value1, depth);
      const value2 = stringify(node.value2, depth);
      return `${indentation}- ${node.key}: ${value1}\n${indentation}+ ${node.key}: ${value2}`;
    }
    case 'unchanged': {
      const indentation = getFourSpaces(depth);
      const value = stringify(node.value, depth);
      return `${indentation}${node.key}: ${value}`;
    }
    case 'nested': {
      const indentation = getFourSpaces(depth);
      const lines = iter(node.children, depth + 1);
      return `${indentation}${node.key}: {\n${lines.join('\n')}\n${indentation}}`;
    }
    default:
      throw new Error(`Unknown type of node '${node.type}'.`);
  }
});

const formatStylish = (tree) => {
  const result = iter(tree, 1);
  return `{\n${result.join('\n')}\n}`;
};

export default formatStylish;