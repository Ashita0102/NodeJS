const fs=require('fs');
const zlib = require('zlib'); // zlib is a core module

//create a readable stream from the original file
const readStream=fs.createReadStream('sample.txt')

//compressing the data
const writeStream=fs.createWriteStream('sample.txt.gz');

//create a gzip transformation 
const gzip=zlib.createGzip();

//pipeline to read the content first then compress it and write it at the end(pipe::read::compress::write)
readStream.pipe(gzip).pipe(writeStream)
console.log("File is compressed");