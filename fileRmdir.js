const fs = require("fs");
// /test/node/test/ 为之前创建的空目录
console.log("准备删除目录 /test/node/test/");
fs.rmdir("/test/node/test",function(err){
	if (err) {
		return console.error(err);
	}
	console.log("读取 /test/node/ 目录");
	fs.readdir("/test/node/",function(err, files){
		if (err) {
			return console.error(err);
		}
		files.forEach( function (file){
			console.log( file );
		});
	});
});
