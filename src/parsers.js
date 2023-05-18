import YAML from 'js-yaml';

export default (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`'Unknown format! ${format}'`);
  }
};
