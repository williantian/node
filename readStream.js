const fs = require('fs');
let data = '';

// 创建可读流
const readerStream = fs.createReadStream('input.txt')
// 设置编码为utf8
readerStream.setEncoding('UTF8')

// 处理流事件 > data   end   error
readerStream.on('data', (chunk)=>{
	data += chunk
})

readerStream.on('end', ()=>{
	console.log(data)
})

readerStream.on('error', (err)=>{
	console.log(err.stack)
})

console.log('执行完毕')
