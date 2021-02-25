const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

crearArchivo(argv.b, argv.h, argv.l)
  .then(nameFile => console.log(nameFile, 'creado.'))
  .catch(err => console.log(err));