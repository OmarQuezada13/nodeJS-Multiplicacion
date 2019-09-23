let fs = require('fs');
const argumentos = require('yargs');
help();
let base = 6;
let datos = '';
for (let i=0; i<11; i++){
    datos += `${base} * ${i} = ${base*i}\n`;

      }

      fs.writeFile(`Tabla_del_${base}.txt`,datos,function (err) {
    if (err) throw err;
    console.log('Saved!');
}); 