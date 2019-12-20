const express = require('express');
const app = express();
const fs = require("fs");

const bodyParser = require('body-parser');
const multer  = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/test/node/express-test/'}).array('image'));

app.get('/index2.html', function (req, res) {
	res.sendFile( __dirname + "/" + "index2.html" );
})

app.post('/file_upload', function (req, res) {

	console.log(req.files[0]);  // 上传的文件信息

	const des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile( req.files[0].path, function (err, data) {
		fs.writeFile(des_file, data, function (err) {
			let response;
			if( err ){
				console.log( err );
			}else{
				response = {
					message:'File uploaded successfully',
					filename:req.files[0].originalname
				};
			}
			console.log( response );
			res.end( JSON.stringify( response ) );
		});
	});
})

var server = app.listen(8081, '127.0.0.1',function () {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://", host, port)

})
