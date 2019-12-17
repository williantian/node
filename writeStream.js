const fs = require('fs')
let data = '这是要写入的data'

//创建一个可以写入的流，写入到文件 output.txt 中
const writerStream = fs.createWriteStream('output.txt')

// 使用utf8 编码写入数据
writerStream.write(data, 'UTF8')

// 标记文件末尾
writerStream.end()

// 处理流事件 > finish error
writerStream.on('finish', ()=>{
	console.log('写入完成')
})

writerStream.on('error', (err)=>{
	console.log(err.stack)
})

console.log('程序执行完毕')
