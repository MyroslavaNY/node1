// const fileData = require('./dir/file');
//
// fileData.greeting('Viktor');
//
// console.log(__dirname);
// console.log(__filename);

const fs = require('fs');
const path = require('path');
const textPath = path.join(__dirname, 'dir', 'text.txt');
const folderWithDeletedData = path.join(__dirname, 'folder', 'deleter.txt');
const dirToReadPath = path.join(__dirname, 'dir', 'text.txt');

// fs.writeFile(textPath, 'Hello 2222',err =>{
//     console.log(err);
// } )

// fs.appendFile(textPath, 'NEW HELLO \n', err => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log('DONE');
// })


// const mkDirPath = path.join(__dirname,'dir', 'folder2', 'innerFolder', 'HelloWhat');
// fs.mkdir(mkDirPath, {recursive: true},err => {
//     console.log(err);
// });


// fs.readFile(textPath, (err, data) => {})
// if (err){
//     console.log(err);
//     return;
// }
// fs.appendFile(textPath2,data, err1 =>{
//
// })
//     console.log(data.toString());
// })

//
// fs.readdir(dirToReadPath, (err, files) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     // console.log(files);
//
//     files.forEach(file => {
//         const filePath = path.join(dirToReadPath, file);
//         fs.stat(filePath, (err1, stats) => {
//             console.log('_________________');
//             console.log(stats.isFile(), 'isFile');
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log(stats.size);
//             console.log('______________________');
//         })
//     })
// });

// fs.rmdir(path.join(dirToReadPath, 'thisDir'), err => {
//     console.log(err);
// })

// fs.unlink(path.join(__dirname, 'dir', 'text2.txt'), err => {
//     console.log(err);
// })

// fs.rename(textPath, folderWithDeletedData, err => {
//     console.log(err);
// });

// const util = require('util');
// const appendPromise = util.promisify(fs.appendFile);
//
// appendPromise(folderWithDeletedData, 'TEXT DATA WITH PROMISE \n')
//     .catch(reason => {
//         console.log(reason);
//     })

const readStream = fs.createReadStream(folderWithDeletedData);
const writeStrm = fs.createWriteStream(textPath);

console.time('STRM')
readStream.on('data', chunk => {
    writeStrm.write(chunk);
});

// readStream.pipe(writeStrm);
console.timeEnd('STRM');
