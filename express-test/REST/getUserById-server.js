const express = require('express');
const app = express();
const fs = require("fs");

app.get('/:id', function (req, res) {
	// 首先我们读取已存在的用户
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse( data );
		const user = data["user" + req.params.id]
		console.log( user );
		res.end( JSON.stringify(user));
	});
})

const server = app.listen(8081, '127.0.0.1', function () {

	const host = server.address().address
	const port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
