const fs = require('fs');
const path = require('path');
const elenPath = path.join(__dirname, '1800', 'elen.json');
const romanPath = path.join(__dirname, '1800','roman.json');
const robertPath= path.join(__dirname, '1800', 'robert.json');
const viraPath = path.join(__dirname, '2000', 'vira.json');
const nazarPath = path.join(__dirname, '2000', 'nazar.json');
const daraPath =path.join(__dirname, '2000', 'dara.json');


fs.writeFile(elenPath, '',err => {

});
fs.writeFile(romanPath,'', err => {

});
fs.writeFile(robertPath, '', err => {

});
fs.writeFile(viraPath, '', err => {

});
fs.writeFile(nazarPath, '', err => {

});
fs.writeFile(daraPath, '', err => {

});

fs.readFile(elenPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
})

