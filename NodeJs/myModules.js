var fs = require('fs');
var path = require('path');



module.exports = function (dirName,filter,callback) 
{ 
	//var dirName = args[0];
	filter = '.' + filter;
	//var callback = function(){args[2]}; 
	//console.log(callback);
	var filtList = [];
	//console.log('filter is: ',filter);

    fs.readdir(dirName,function (err, files) {
        if (err)
           return callback(err) // early return

         // ... no error, continue doing cool things with `data`
        files.forEach(function(file)
		{
			//console.log(file);
			if (path.extname(file) == filter)
			{
				filtList.push(file);
			}
		});
         // all went well, call callback with `null` for the error argument
         //console.log(typeof callback);
         callback(null, filtList);
     });
     

	
}