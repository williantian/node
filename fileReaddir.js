const fs = require("fs");

console.log("查看 /test/node/ 目录");
fs.readdir("/test/node/",function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach( function (file){
		console.log( file );
	});
});
