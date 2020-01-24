import fs from "fs";
import xml2js from "xml2js";
import db from "../server/connect";

const parser = new xml2js.Parser();
const xmlFile = process.argv.slice(2);

console.log(`${__dirname}/../../xml/${xmlFile}`)

fs.readFile(`${__dirname}/../xml/${xmlFile}`, (err, data) => {
    parser.parseString(data, (err, result) => {
        console.dir(result);
        console.log('Done');
    });
});

db.close();
