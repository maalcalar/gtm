const path = require('path');
const glob = require('glob');

// console.log(glob.sync('./app/**/**.trigger.js'))

let entries = {};
const triggers = glob.sync('./app/**/**.project.js');

triggers.forEach((ct, it, ob) => {
    const splitted = ct.split('/');

    if (!(splitted[splitted.length - 2] === 'Tags' || splitted[splitted.length - 2] === 'Triggers' || splitted[splitted.length - 2] === 'Variables')) {
        const proyecto = splitted[splitted.length - 1].split('.')[0];
        entries[proyecto] = ct;
    }
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