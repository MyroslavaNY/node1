const fs = require('fs');
const path = require('path');


const elenPath = path.join(__dirname, 'people', 'elen.json');
const romanPath = path.join(__dirname, 'people','roman.json');
const robertPath= path.join(__dirname, 'people', 'robert.json');
const viraPath = path.join(__dirname, 'people', 'vira.json');
const nazarPath = path.join(__dirname, 'people', 'nazar.json');
const daraPath =path.join(__dirname, 'people', 'dara.json');

const femalePath = path.join(__dirname, 'went','2000');
const malePath = path.join(__dirname,'went','1800') ;

const allPath = path.join(__dirname, 'people');


fs.mkdir(femalePath, {recursive:true},err =>{
    console.log(err);
} );
fs.mkdir(malePath,{recursive:true}, err => {
    console.log(err);
});


fs.writeFile(elenPath, '{"name": "Elen", "gender": "female"}',err => {

});
fs.writeFile(romanPath,'{"name": "Roman", "gender": "male"}', err => {

});
fs.writeFile(robertPath, '{"name": "Robert", "gender": "male"}', err => {

});
fs.writeFile(viraPath, '{"name": "Vira", "gender": "female"}', err => {

});
fs.writeFile(nazarPath, '{"name": "Nazar", "gender": "male"}', err => {

});
fs.writeFile(daraPath, '{"name": "Dara", "gender": "female"}', err => {

});

fs.readFile(elenPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
fs.readFile(robertPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
fs.readFile(romanPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
fs.readFile(daraPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
fs.readFile(nazarPath, (err,data)=> {
       if (err){
        console.log(err);
        return;
    }
        console.log(data.toString())
});
fs.readFile(viraPath, (err,data)=> {
    if (err){
        console.log(err);
        return;
    }
       console.log(data.toString());
});

fs.readdir(allPath,((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);

    files.forEach(file =>{
        const filePath = path.join(allPath, file);
        fs.readFile(filePath,((err1, data) => {
            if (err1){
                console.log(err1);
                return;
            }
            console.log(JSON.parse(data.toString()));

            const persone = data.toString();
            console.log(persone);
            if(persone.includes("female")){
                fs.rename(allPath, femalePath, err2 => {
                    console.log(err2);

                })
            }
            if (persone.includes("male")){
                fs.rename(allPath,malePath, err2 => {
                    console.log(err2);
                })
            }
        }))
    });
}))






