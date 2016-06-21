//Import dependencies
var fs = require('fs');

//Read a json file
exports.read = function(file, opt, cb)
{
  //Check the cb function
  if(typeof cb === 'undefined')
  {
    //Save the callback function
    var cb = opt;

    //Initialize the options
    opt = { };
  }

  //Check the options
  if(typeof opt === 'string'){ opt = { encoding: opt }; }

  //Check for undefined encoding
  if(typeof opt.encoding === 'undefined'){ opt.encoding = 'utf8'; }

  //Open the file
  fs.readFile(file, opt.encoding, function(err, content)
  {
    //Check the error
    if(err){ return cb(err, null); }

    //Do the callback
    return cb(null, JSON.parse(content));
  });
};

//Read a json file sync
exports.readSync = function(file, opt)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Check for string options
  if(typeof opt === 'string'){ opt = { encoding: opt }; }

  //Check the encoding
  if(typeof opt.encoding === 'undefined'){ opt.encoding = 'utf8'; }

  //Get the content
  var content = fs.readFileSync(file, opt.encoding);

  //Parse to json and return
  return JSON.parse(content);
};
