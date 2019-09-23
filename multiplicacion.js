const fs = require('fs');
const argumentos = require('yargs');
let listarTabla = (base, limite = 10) => {
    for(let i = 1; i <= limite; i++){
        console.log(`${base} X ${i} = ${base*i}`);

    }
};

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let datos = '';

        for(let i = 1; i <= 10; i++){
            datos += `${base} X ${i} = ${base*i}\n`
            // console.log(`${base} X ${i} = ${base*i}`);

        }

        fs.writeFile(`tabla-del-${base}.txt`, datos , (error) => {
            if (error){
                reject(error);
            }else{
                resolve(`tabla-del-${base}.txt`);
            }

            console.log('El archivo ejemplo.txt ha sido creado con exito');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}