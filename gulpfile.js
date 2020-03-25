const { src, dest, series } = require('gulp');
var rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');
const glob = require('glob');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

// function js() {
//     return src('app/test_proyecto_01/*.project.js')
//         .pipe(babel({
//             plugins: ['@babel/transform-runtime']
//         }))
//         .pipe(rename((path) => path.extname = '.js'))
//         .pipe(uglify())
//         .pipe(dest('app/'));
// }

const promesaTest = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('Bien');
        }, 1000);
    } else {
        setTimeout(() => {
            reject('Mal');
        }, 500);
    }
});

function test() {
    promesaTest.then((res) => {
        console.log(`Valor ${res}`);
    }, (err) => {
        console.error(`Valor ${err}`);
    });
}

let entrada;

const jsTask = entry => {
    return new Promise((resolve) => {
        const stream = src(entry.path)
            .on('end', () => { resolve(true); })
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
            .pipe(webpack({ output: { filename: entry.name }}))
            .pipe(rename((path) => path.extname = '.js'))
            .pipe(uglify())
            .pipe(dest('app/'));
    });
}

let entries = [];
const triggers = glob.sync('./app/test_proyecto_01/**.project.js');

function js() {
    triggers.forEach((ct, it, ob) => {
        const splitted = ct.split('/');
    
        const proyecto = splitted[splitted.length - 1].split('.')[0];
        // entries[proyecto] = ct;
        entries.push({name: proyecto, path: ct});
    });
    
    // console.log(entries);

    entries.forEach(entry => {
        (async function(){
            const resultado = await jsTask(entry);
            console.log(entry, resultado);
        })();
    });
}

// async function jsTaskTest(entry) {
//     return Promise.resolve(
//         `Proyecto ${entry.name}`
//     );
// }

// async function jsTask(entry) {
//     return Promise.resolve(src(entry.path)
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
//         .pipe(webpack({ output: { filename: entry.name }}))
//         .pipe(rename((path) => path.extname = '.js'))
//         .pipe(uglify())
//         .pipe(dest('app/')));
// }

// function js1() {
//     return src('app/Projects/html-chat_listener.project.js')
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
//         .pipe(webpack({ output: { filename: 'html-chat_listener.project.js' }}))
//         .pipe(rename((path) => path.extname = '.js'))
//         .pipe(uglify())
//         .pipe(dest('app/'));
// }

// function js2() {
//     return src('app/Projects/html-redirect_movistar_prix.project.js')
//         .pipe(babel({
//             presets: [
//                 [
//                     "@babel/env", {
//                         "targets": {
//                             "edge": "17",
//                             "firefox": "60",
//                             "chrome": "67",
//                             "safari": "11.1"
//                         },
//                         "useBuiltIns": "usage"
//                     }]],
//             plugins: ["@babel/transform-runtime"]
//         }))
//         .pipe(webpack({ output: { filename: 'html-redirect_movistar_prix.project.js' } }))
//         .pipe(rename((path) => path.extname = '.js'))
//         .pipe(uglify())
//         .pipe(dest('app/'));
// }

// exports.js = series(js1, js2);
exports.test = test;
exports.js = js;
exports.default = defaultTask;