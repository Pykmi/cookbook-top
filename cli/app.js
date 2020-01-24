const store = require('../lib/connect');

function App() {
    this.actions = {};

    this.use = function(action, callback) {
        this.actions[action] = callback;
    };

    this.run = function() {
        const cmd = process.argv.slice(2)[0];
        const target = process.argv.slice(2)[1];

        this.actions[cmd]({ target, store });
    };
};

module.exports = App;
