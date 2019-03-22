//requireds
const fs = require('fs');

let data = '';

//module.exports.crearArchivo...etc   es otra forma de usar el module

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
        // data += `${base} * ${i} = ${base*i}\n`;
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }


        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`)
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}