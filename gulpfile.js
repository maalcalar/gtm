const { src, dest } = require('gulp');
var rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function js() {
    return src('app/test_proyecto_01/*.project.js')
        .pipe(babel({
            "presets": ["@babel/env"],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(rename((path) => path.extname = '.js'))
        .pipe(uglify())
        .pipe(dest('app/'));
}

exports.js = js;
exports.default = defaultTask;