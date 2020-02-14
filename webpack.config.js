const path = require('path');
const glob = require('glob');

// console.log(glob.sync('./app/**/**.trigger.js'));

module.exports = {
    mode: 'production',
    entry: {
        test_trigger_page_view: './app/test_trigger_page_view/page_view.trigger.js',
        test_trigger_dom_ready: './app/test_trigger_dom_ready/dom_ready.trigger.js',
        test_trigger_window_loaded: './app/test_trigger_window_loaded/window_loaded.trigger.js'
    },
    // entry: glob.sync('./app/**/**.trigger.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app')
    }
};