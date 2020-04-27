const { src, dest, series, parallel } = require('gulp');
var rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const glob = require('glob');

// Inicio variables globales
let entries = [];
let tasks = [];
let ejecutar;

const wConfig = require('./webpack.config');
const gConfig = require('./gulp-config');
// Fin variables globales

// Inicio Tareas
function presenters(cb) {
    const triggers = glob.sync('./app/containers/*/*/main.presenter.js');

    triggers.forEach((ct, it, ob) => {
        const splitted = ct.split('/');
    
        const proyecto = `containers/${splitted[3]}/js/${splitted[4]}.min.js`;
        entries.push({name: proyecto, path: ct});

        tasks.push(transpilar);
    });

    ejecutar = series(...tasks);

    ejecutar();

    cb();
}

function transpilar() {
    const entry = entries.shift();

    const stream = src(entry.path)
        .pipe(babel({
            presets: [
                [
                    "@babel/env", {
                    "targets": {
                        "edge": "17",
                        "firefox": "60",
                        "chrome": "67",
                        "safari": "11.1"
                    }, 
                    "useBuiltIns": "usage"
                }]],
            plugins: ["@babel/transform-runtime"]
        }))
        .pipe(webpackStream({ output: { filename: `../dist/${entry.name}` }}))
        .pipe(rename((path) => path.extname = '.js'))
        .pipe(uglify())
        .pipe(dest('app/'));

    return stream;
}

function bundle() {
    return src(gConfig.paths.src)
            .pipe(webpackStream(wConfig, webpack))
            .pipe(dest(gConfig.paths.dest));
}
// Fin Tareas

// Exportación
exports.js = series(presenters);
exports.bundle = bundle;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* eslint-disable object-curly-newline */
// // const path = require('path');
// const { task, src, dest, series } = require('gulp');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const babel = require('gulp-babel');

// const wConfig = require('./webpack.config');
// const gConfig = require('./gulp-config');

// task('bundle', () => src(gConfig.paths.src)
//     .pipe(webpackStream(wConfig, webpack))
//     .pipe(dest(gConfig.paths.dest))
// );

// task('build', series('bundle'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const { src, dest, series, parallel } = require('gulp');
// var rename = require('gulp-rename');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify-es').default;
// const webpack = require('webpack-stream');
// const glob = require('glob');

// // Variables globales
// let entries = [];
// let tasks = [];
// let ejecutar;
// // Fin variables globales

// // Tareas
// function defaultTask(cb) {
//     cb();
// }

// function transpilar() {
//     const entry = entries.shift();

//     const stream = src(entry.path)
//         .pipe(babel({
//             presets: [
//                 [
//                     "@babel/env", {
//                     "targets": {
//                         "edge": "17",
//                         "firefox": "60",
//                         "chrome": "67",
//                         "safari": "11.1"
//                     }, 
//                     "useBuiltIns": "usage"
//                 }]],
//             plugins: ["@babel/transform-runtime"]
//         }))
//         .pipe(webpack({ output: { filename: `../dist/${entry.name}` }}))
//         .pipe(rename((path) => path.extname = '.js'))
//         .pipe(uglify())
//         .pipe(dest('app/'));

//     return stream;
// }

// function archivos(cb) {
//     const triggers = glob.sync('./app/test_proyecto_01/*.project.js');

//     triggers.forEach((ct, it, ob) => {
//         const splitted = ct.split('/');
    
//         const proyecto = splitted[splitted.length - 1].split('.')[0];
//         entries.push({name: proyecto, path: ct});

//         tasks.push(transpilar);
//     });

//     ejecutar = series(...tasks);

//     ejecutar();

//     cb();
// }

// // function js() {
// //     return src('app/test_proyecto_01/*.project.js')
// //         .pipe(babel({
// //             plugins: ['@babel/transform-runtime']
// //         }))
// //         .pipe(rename((path) => path.extname = '.js'))
// //         .pipe(uglify())
// //         .pipe(dest('app/'));
// // }
// // Fin tareas

// // Exportación
// exports.js = series(archivos);
// exports.default = defaultTask;