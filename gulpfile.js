const { src, dest } = require('gulp');
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

function js() {
    return src('app/test_proyecto_01/*.project.js')
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
        .pipe(webpack({ output: { filename: 'proyecto_01.project.js' }}))
        .pipe(rename((path) => path.extname = '.js'))
        .pipe(uglify())
        .pipe(dest('app/'));
}

exports.js = js;
exports.default = defaultTask;