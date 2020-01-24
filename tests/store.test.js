import db from "../server/connect";

describe("Database functions", () => {
    it("should connect to database", () => {
        db.select('SELECT NOW()', (err, res) => {
            console.log(`Time: ${res.rows[0].now}`);
            done();
        });
    });
});
