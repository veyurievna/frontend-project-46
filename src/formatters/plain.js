import _ from 'lodash';

const stringify = (value) => {
if (_.isObject(value)) return '[complex value]';
if (typeof value === 'string') return '${value}';
return value;
};

const iter = (tree, path) => tree.flatMap((node) => {
const propertyName = [...path, node.key];
switch (node.type) {
case 'nested':
return iter(node.children, propertyName);
case 'added':
return `Property '${propertyName.join('.')}' was added with value: ${stringify(node.value)}`;
case 'deleted':
return `Property '${propertyName.join('.')}' was removed`;
case 'changed':
return `Property '${propertyName.join('.')}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
case 'unchanged':
return [];
default:
return new Error(`Unknown type: ${node.type}`);
}
});

const formatPlain = (data) => `${iter(data, []).join('\n')}`;

export default formatPlain;
