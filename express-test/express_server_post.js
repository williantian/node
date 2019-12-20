const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/index.html',(req,res)=>{
	res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post',urlencodedParser,(req,res)=>{
	const response = {
		"first_name": req.body.first_name,
		"last_name": req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

const server = app.listen(8081,'127.0.0.1',()=>{
	const host = server.address().address;
	const port = server.address().port
	console.log('应用实例，访问地址为 http://', host, port)
});
