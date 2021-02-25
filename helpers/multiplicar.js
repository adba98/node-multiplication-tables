const fs = require('fs');
require('colors');


const crearArchivo = async (base, hasta, listar) => {
  try {
    let salida = '', consola = '';

    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.rainbow} ${i} ${'='.america} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log('Tabla del', base);
      console.log('=========='.green);
      console.log(consola);
    }

    const ruta = './salida/'
    const fileName = `tabla-${base}.txt`;
    fs.writeFileSync(`${ruta}${fileName}`, salida);

    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
}