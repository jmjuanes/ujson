//Import dependencies
var fs = require('fs');

//JSon object
var json = {};

//Parse a string object
json.parse = function(str){ return JSON.parse(str); };

//Convert to string
json.toString = function(obj, space)
{
  //Check the spaces
  if(typeof space !== 'string'){ var space = ''; }

  //Convert to string and return
  return JSON.stringify(obj, null, space);
};

//Extend a json object
json.extend = function(child, parent, keys)
{
  //Check the keys
  if(typeof keys === 'undefined'){ var keys = Object.keys(parent); }

  //Read the list with all the keys
  keys.forEach(function(key)
  {
    //Check for undefined key in parent
    if(typeof parent[key] === 'undefined'){ return true; }

    //Extend
    child[key] = parent[key];
  });

  //Return the extended object
  return child;
};

//Save to a JSON file
json.write = function(file, obj, opt, cb)
{
  //Check for no options
  if(typeof opt === 'function'){ var cb = opt; opt = {}; }

  //Parse the options
  var opt = check_opts(opt);

  //Write the file
  fs.writeFile(file, json.toString(obj, opt.space), opt.encoding, function(error)
  {
    //Check for error
    if(error){ return cb(true, error); }

    //Do the callback without error
    return cb(false);
  });
};

//Write to a json file sync
json.writeSync = function(file, obj, opt)
{
  //Parse the options
  var opt = check_opts(opt);

  //Save to a file and exit
  return fs.writeFileSync(file, json.toString(obj, opt.space), opt.encoding);
};

//Read from JSON file
json.read = function(file, opt, cb)
{
  //Check for no options
  if(typeof opt === 'function'){ var cb = opt; opt = {}; }

  //Parse the options
  var opt = check_opts(opt);

  //Read from file
  fs.readFile(file, opt.encoding, function(error, data)
  {
    //Check for error
    if(error){ return cb(true, error); }

    //Parse the data
    data = json.parse(data);

    //Return the json object
    return cb(false, data);
  });
};

//Read a json file sync
json.readSync = function(file, opt)
{
  //Check the options
  var opt = check_opts(opt);

  //Get the content
  var data = fs.readFileSync(file, opt.encoding);

  //Parse to json and return
  return json.parse(data);
};

//Check the options
var check_opts = function(opt)
{
  //Check for string
  if(typeof opt === 'string'){ opt = { encoding: opt }; }

  //Check for no object
  if(typeof opt !== 'object'){ opt = {}; }

  //Check the encoding
  if(typeof opt.encoding !== 'string'){ opt.encoding = 'utf8'; }

  //Check the json spaces
  if(typeof opt.space === 'undefined'){ opt.space = ''; }

  //Return the parsed options
  return opt;
};

//Exports
module.exports = json;
