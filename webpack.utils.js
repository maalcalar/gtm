const path = require('path');
const glob = require('glob');

exports.getEntries = (pattern) => {
  const entries = {};
  const files = glob.sync(pattern);

  files.forEach((file) => {
    entries[file.replace(/app\//,'').replace(/\.js/,'').replace(/\/main\.presenter/,'')] = path.join(__dirname, file);
  });

  return entries;
}

exports.getControllers = () => {
  const entries = {};
  const files = glob.sync('app/containers/*/main.controller.js');

  files.forEach((file) => {
    let file_split = file.split('/');
    entries[file_split[1] + '/' + file_split[2] + '/main'] = path.join(__dirname, file);
  });

  return entries;
}

exports.getPresenters = () => {
  const entries = {};
  const files = glob.sync('app/containers/*/*/main.presenter.js');

  files.forEach((file) => {
    let file_split = file.split('/');
    entries[file_split[1] + '/' + file_split[2] + '/js/' + file_split[3]] = path.join(__dirname, file);
  });

  return entries;
}