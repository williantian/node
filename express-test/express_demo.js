const express = require('express');
const app = express();

app.get('/', (request,response)=>{
	response.send('Hello World');
});

const server = app.listen(8081,'127.0.0.1', ()=>{
	const host = server.address().address;
	const port = server.address().port;
	console.log("应用实例，访问地址为 http://", host, port)
});
