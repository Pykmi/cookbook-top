const fs = require('fs');
const Parser = require('xml2js').Parser;

const start = async (opt) => {
    const { store } = opt;
    const { rows } = await store.select('SELECT NOW()');

    getXmlContent();

    try {

        /*const P = new Parser();

        const xml = await P.parseStringPromise(data).then((res) => res).catch((err) => 'err');
        console.log({ xml });*/

        //await fs.access(file).then(() => true);

    } catch(e) {
        console.error('No file found!');
    }

    store.close();
};

const getXmlContent = async () => {
    const file = `${__dirname}/../xml/example.xml`;
    try {
        const S = await fs.readFile(file, (err, data) => console.log({ err, data }));
        console.log({ S });
    } catch(e) {
        console.log({ e });
    }
};

module.exports = { start };
