const { createFile } = require('./helpers/multiplicar');
const { b: base, u: until, l: list } = require('./config/yargs');

console.clear();

createFile(base, until, list)
  .then((fileName) => {
    console.log(`The file '${fileName}' has been created successfully.`);
  })
  .catch((error) => console.error(`Error: ${error}`));
