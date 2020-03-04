const { src, dest, series } = require('gulp');
var rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const webpack = require('webpack-stream');

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

function js1() {
    return src('app/Projects/html-chat_listener.project.js')
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
        .pipe(webpack({ output: { filename: 'html-chat_listener.project.js' }}))
        .pipe(rename((path) => path.extname = '.js'))
        .pipe(uglify())
        .pipe(dest('app/'));
}

function js2() {
    return src('app/Projects/html-redirect_movistar_prix.project.js')
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
        .pipe(webpack({ output: { filename: 'html-redirect_movistar_prix.project.js' } }))
        .pipe(rename((path) => path.extname = '.js'))
        .pipe(uglify())
        .pipe(dest('app/'));
}

exports.js = series(js1, js2);
exports.default = defaultTask;