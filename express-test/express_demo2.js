const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	console.log('主页GET请求');
	res.send('Hello GET')
});

app.post('/',(req,res)=>{
	console.log('主页POST请求');
	res.send('Hello POST')
});

app.get('/del_user',(req,res)=>{
	console.log('del_user 响应DELETE请求');
	res.send('删除页面');
});

app.get('/list_user',(req,res)=>{
	console.log('/list_user GET请求');
	res.send('用户列表页面')
});

// 对页面正则匹配 abcd abxcd ab123cd 等响应GET请求
app.get('/ab*cd',(req,res)=>{
	console.log('/ab*cd GET请求');
	res.send('正则匹配')
});

const server = app.listen(8081,'127.0.0.1',()=>{
	const host = server.address().address;
	const port = server.address().port;
	console.log('应用实例，访问地址为 http://', host, port)
});
