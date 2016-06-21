//Exports to node
module.exports =
{
  //Read a json file
  read: require('./lib/read.js').read,

  //Read a json file Sync
  readSync: require('./lib/read.js').readSync,

  //Write to a json file
  write: require('./lib/write.js').write,

  //Write to a json file sync
  writeSync: require('./lib/write.js').writeSync,

  //Extend a json object
  extend: require('./lib/extend.js').extend
};
