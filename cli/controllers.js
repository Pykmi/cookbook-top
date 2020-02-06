const xml2js = require('xml2js');
const { getFileContent } = require('../lib/file');

const start = async (opt) => {
    const { store } = opt;
    const { rows } = await store.select('SELECT NOW()');

    try {
        throw new Error("fucked it up");
        console.log("hello world");
    } catch(e) {
        console.error("error happened");
    }

    //const json = await readXmlToJson();
    store.close();
};

const readXmlToJson = async () => {
    const xml = await getFileContent("xml/example.xml");
    return await xml2js.parseStringPromise(xml);
};

module.exports = { start };
