import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, format = 'stylish') => {
  const formatters = { stylish, plain, json: JSON.stringify };
  const formatter = formatters[format];

  return formatter(diff);
};
