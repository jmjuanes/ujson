//Import ujson
var ujson = require('../index.js');

//Test read json file sync
console.log('Read json Sync...');
var content1 = ujson.readSync('./file.json', 'utf8');
console.log(JSON.stringify(content1));

//Test write json file sync
console.log('Write json Sync...');
var content2 = { write_json_file_sync: true };
ujson.writeSync('./write_sync.json', content2, { encoding: 'utf8', jsonSpace: '   '});

//Test extend a json object
console.log('Extend json object...');
var content3 = { key1: 'value1', key2: 'value2' };
var content4 = { key3: 'value3', key4: 'value4' };
console.log('content3: ' + JSON.stringify(content3));
console.log('content4: ' + JSON.stringify(content4));
content3 = ujson.extend(content3, content4, [ 'key3', 'key4' ]);
console.log('extend from 3 and 4: ' + JSON.stringify(content3));

//Test read json
console.log('Read json...');
ujson.read('./file.json', 'utf8', function(err, data){ console.log('Read json: ' + JSON.stringify(data)); });

//Test write json
console.log('Write json...');
ujson.write('./write.json', { write_json_file: true }, 'utf8', function(err){ console.log('Write json OK'); });
