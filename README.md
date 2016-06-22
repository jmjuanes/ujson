# ujson

[![npm](https://img.shields.io/npm/v/ujson.svg?style=flat-square)](https://www.npmjs.com/package/ujson)
[![npm](https://img.shields.io/npm/dt/ujson.svg?style=flat-square)](https://www.npmjs.com/package/ujson)

Methods to work with JSON objects and files.

## Installation

Install **ujson** using NPM:

```
npm install ujson
```

## API

### ujson.read(path, [options, ] callback)

Reads the content of a JSON file. Accepts the following arguments:
- `path`: full path to the json file.
- `options`: (optionally) object or string with the following options:
  - `encoding`: default: `utf8`.
- `callback`: function that will be executed with two arguments: `err` and `data`, where `data` is a parsed object with the file content in json format.

If options is a string, then it specifies the encoding. Example:

```javascript
ujson.read('file.json', 'utf8', function(err, data)
{
  //Check for error
  if(err){ throw err }

  //Show json content
  console.log(data);
});
```

### ujson.readSync(path, [options])

Synchronous version of `ujson.read`. Returns a parsed object with the content of the json file.

### ujson.write(path, object, [options, ] callback)

Write the object to the json file specified. Accepts the following arguments:
- `path`: string with the filename.
- `object`: json object that will be saved as a json file.
- `options` (optionally) object or string with the following options:
  - `encoding`: default: `utf8`.
	- `jsonSpace`: string or number that's used to insert white space into the output JSON string for readability purposes.
- `callback`: function.

Example:
```javascript
ujson.write('file.json', { key: 'value' }, { encoding: 'utf8', jsonSapce: '\t' }, function(err)
{
  //Check for error
  if(err){ throw err; }

  //Do something....
});
```

### ujson.writeSync(path, object, [options])

Synchronous version of `ujson.write`.

### ujson.extend(child, parent, keys)

Extend a `child` object with the `keys` of a `parent` object. Example:

```javascript
//Parent object
var obj_parent = { key1: 'value1', key2: 'value2', key3: 'value3' };

//Child object
var obj_child = { key4: 'value4' };

//Extend
var obj_extended = ujson.extend(obj_child, obj_parent, [ 'key1', 'key2' ]);

//Show  extended object
console.log(obj_extended); //-> { key4: 'value4', key1: 'value1', key2: 'value2' }
```

## License

[MIT](./LICENSE) LICENSE.
