const fs = require('fs').promises;

const getFileContent = async (path) => await fs.readFile(`${__dirname}/../${path}`, "utf8");

module.exports = { getFileContent };