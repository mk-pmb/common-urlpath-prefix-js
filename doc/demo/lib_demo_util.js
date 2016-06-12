/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = module.exports, cup = require('common-urlpath-prefix');
EX.dbgLv = +(process.env.DEBUGLEVEL || 1);

EX.vcup = function vcup(paths) {
  paths.base = cup(paths, { debug: EX.dbgLv });
  console.log('=> ' + paths.base);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('');
  return paths.base;
};

EX.dump = function (x) { console.log(JSON.stringify(x)); };

EX.logwrap = function (origFunc) {
  var wrappedFunc;
  wrappedFunc = function () {
    var result;
    try {
      result = origFunc.apply(null, arguments);
      result = '-> ' + JSON.stringify(result);
    } catch (err) {
      result = '!! ' + String(err);
    }
    console.log(result);
  };
  Object.keys(origFunc).forEach(function copyExtraKey(key) {
    if (wrappedFunc[key] === undefined) {
      console.error('Copy key: ' + key);
      wrappedFunc[key] = origFunc[key];
    }
  });
  return wrappedFunc;
};

EX.chap = function chapter(title) {
  chapter.num = (chapter.num || 0) + 1;
  if (chapter.num > 1) { console.log(''); }
  console.log('=== ' + title + ' ===');
};
