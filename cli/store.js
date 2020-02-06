const db = require('../lib/connect');
const { getFileContent } = require('../lib/file');

function Datastore() {
    this.tables = [
        { name: recipies, script: "create_table_recipies.sql", required: true }
    ];

    this.path = `db`;

    this.createAll = function() {

    };

    this.createOne = function(table) {
        try {
            if(!this.tableExists(table)) {
                throw new Error("Table does not exist");
            }
            const sql = await getFileContent(`db/create_table_${table}.sql`)
            db.query(sql);
        } catch(e) {
            console.error("TABLE COULD NOT BE CREATED.")
        }
    }

    this.tableExists = function(table) {
        return this.tables.filter((T) => T.name === table);
    };
}

module.exports = Datastore;