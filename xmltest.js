const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();
fs.readFile(__dirname + '/xml/example.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result["cb:recipe"]["cb:tags"]);
        console.log('Done');
    });
});
