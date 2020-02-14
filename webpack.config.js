const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/proyecto_prueba/proyecto_prueba.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './app')
    }
    // entry: './src/index.js',
    // output: {
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
};