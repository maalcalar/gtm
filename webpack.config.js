const path = require('path');
const glob = require('glob');

// console.log(glob.sync('./app/**/**.trigger.js'))

let entries = {};
const triggers = glob.sync('./app/**.project.js');

triggers.forEach((ct, it, ob) => {
    const splitted = ct.split('/');

    const proyecto = splitted[splitted.length - 1].split('.')[0];
    entries[proyecto] = ct;
});

// console.log(entries);

module.exports = {
    mode: 'production',
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app')
    }
};