//required
const fs = require('fs'); // propio de node
const colors = require('colors');

let listarTabla = (base, limite) => {


    console.log('=============================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=============================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido '${base}' o '${limite}' no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i }`);
        }
    })
}


//module.export.crearArchivo  -- otra forma de hacerlo
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i } \n`;
        }

        fs.writeFile(`./archivos/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(` tabla-${base}-al-${limite}.txt`)

        });
    })
}
module.exports = {
    crearArchivo,
    //crearArchivo : crearArchivo desde ecx6 ya no es necesariohacerlo asi
    listarTabla
}