import _ from 'lodash';

const getFormattedValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

export default (tree) => {
  const iter = (node, path) => {
    const lines = node.flatMap(({
      type, key, children, value1, value2,
    }) => {
      const keyPath = path === '' ? `${key}` : `${path}.${key}`;

      switch (type) {
        case 'nested':
          return iter(children, keyPath);
        case 'added':
          return `Property '${keyPath}' was added with value: ${getFormattedValue(value2)}`;
        case 'deleted':
          return `Property '${keyPath}' was removed`;
        case 'changed':
          return `Property '${keyPath}' was updated. From ${getFormattedValue(value1)} to ${getFormattedValue(value2)}`;
        case 'unchanged':
          return [];
        default:
          throw new Error(`Unknown type of diff: ${type}`);
      }
    });

    return lines.join('\n');
  };

  return iter(tree, '');
};