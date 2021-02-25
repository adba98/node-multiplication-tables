const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base para multiplicar'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que numero multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Lista la tabla en consola'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser numerica'
    }
    return true
  })
  .argv;

  module.exports = argv;