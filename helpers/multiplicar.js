const fs = require('fs');
require('colors');

const ASSETS_PATH = './assets/';

const createFile = async (base, until, list) => {
  try {
    let fileData = '',
      consoleData = '';

    for (let i = 1; i <= until; i++) {
      consoleData += `${base} ${'x'.rainbow} ${i} ${'='.america} ${base * i}\n`;
      fileData += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log(`Table of ${base}`);
      console.log('=========='.green);
      console.log(consoleData);
    }

    const fileName = `table-${base}.txt`;
    fs.writeFileSync(`${ASSETS_PATH}${fileName}`, fileData);

    return fileName;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return console.error(`The directory ${ASSETS_PATH} does not exist`);
    }
    console.error(
      `An error occurred while creating the file: ${error.message}`
    );

    throw error;
  }
};

module.exports = {
  createFile,
};
