const fs = require('fs');
const colors = require('colors');

const escribir_archivo = (filename, data) => {
    fs.writeFile(`${filename}.txt`, data, (err) => {
        if(err) throw err;
        console.log(`${filename} creado!!`);
    });
};

const escribir_archivo_sincronico = async(filename, data) => {
    try{
        fs.writeFileSync(`${filename}.txt`, data);
        return colors.yellow(`${filename} creado!!`);
    }catch(err){
        throw `no se pudo crear el archivo\n${err}`;
    }
};

module.exports = { escribir_archivo, escribir_archivo_sincronico };