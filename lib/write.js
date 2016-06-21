//Import dependencies
var fs = require('fs');

//Write to a json file
exports.write = function(file, content, opt, cb)
{
  //Check the cb function
  if(typeof cb === 'undefined')
  {
    //Save the callback function
    var cb = opt;

    //Initialize the options
    opt = {};
  }

  //Check for string options
  if(typeof opt === 'string'){ opt = { encoding: opt }; }

  //Check the encoding
  if(typeof opt.encoding === 'undefined'){ opt.encoding = 'utf8'; }

  //Check the json space
  if(typeof opt.jsonSpace === 'undefined'){ opt.jsonSpace = '  '; }

  //Convert to string
  content = JSON.stringify(content, null, opt.jsonSpace);

  //Save to a file
  fs.writeFile(file, content, opt.encoding, function(err)
  {
    //Check for error
    if(err){ return cb(err); }

    //Else, do the callback with null error
    return cb(null);
  });
};

//Write to a json file sync
exports.writeSync = function(file, content, encoding)
{
  //Check the options
  if(typeof opt === 'undefined'){ var opt = {}; }

  //Check for string options
  if(typeof opt === 'string'){ opt = { encoding: opt }; }

  //Check the encoding
  if(typeof opt.encoding === 'undefined'){ opt.encoding = 'utf8'; }

  //Check the json space
  if(typeof opt.jsonSpace === 'undefined'){ opt.jsonSpace = '  '; }

  //Convert to string
  content = JSON.stringify(content, null, opt.jsonSpace);

  //Save to a file and exit
  fs.writeFileSync(file, content, opt.encoding);
};
