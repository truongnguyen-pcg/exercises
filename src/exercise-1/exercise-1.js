const array = [
    {
        key1: 'value1',
        key2: 'value2'
    },
    {
        key1: 'value1',
        key2: 'value2'
    },
    {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    }
];

function storeElement(ele) {
  return Object.keys(ele).map(key => `${key}=${ele[key]}`).join(';')
}

function store(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }
  let text = arr.map(storeElement).join('\n')
  return text;
}

function load(text) {
  if (typeof text !== 'string') {
    throw new Error('Text is not string');
  }
  const arr = text.split(/\n/).map(loadElement);
  return arr;
}

function loadElement(ele) {
  const obj = {}
  ele.split(';').forEach(item => {
    const object = item.split('=');
    obj[object[0]] = object[1]
  });
  return obj
}

module.exports = {
  store,
  load
}