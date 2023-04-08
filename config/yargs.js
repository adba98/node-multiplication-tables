const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base to multiply',
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: 10,
    describe: 'Until what number multiply',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'List table in console',
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser numerica';
    }
    return true;
  }).argv;

module.exports = argv;
