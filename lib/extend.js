exports.extend = function(child, parent, keys)
{
	//Read the list with all the keys
	for(var i = 0; i < keys.length; i++)
	{
		//Get the key
		var key = keys[i];

		//Check for undefined key in parent
		if(typeof parent[key] === 'undefined')
		{
			//Show error
			console.error('Undefined key "' + key + '" in parent object');

			//Next key
			continue;
		}

		//Extend
		child[key] = parent[key];
	}

	//Return the extended object
	return child;
};
