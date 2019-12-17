const fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /test/node/test/");
fs.mkdir("/test/node/test/",function(err){
	if (err) {
		return console.error(err);
	}
	console.log("目录创建成功");
});
