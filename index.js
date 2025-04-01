function myFind(collection, callback) {
  for (let key in collection) {
    if (callback(collection[key])) {
      return collection[key];
    }
  }
  return undefined;
}

function myFilter(collection, callback) {
  let result = [];
  for (let key in collection) {
    if (callback(collection[key])) {
      result.push(collection[key]);
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

function myEach(collection, callback) {
  for (let key in collection) {
    callback(collection[key]);
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  for (let key in collection) {
    result.push(callback(collection[key]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let keys = Object.keys(collection);
  let startIndex = 0;

  if (acc === undefined) {
    acc = collection[keys[0]];
    startIndex = 1;
  }

  for (let i = startIndex; i < keys.length; i++) {
    acc = callback(acc, collection[keys[i]], collection);
  }

  return acc;
}