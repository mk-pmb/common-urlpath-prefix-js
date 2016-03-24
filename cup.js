﻿/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function common_urlpath_prefix(paths, opts) {
  var basePath = '', bpLen = 0, dirSep, prefix = true;
  if (!opts) { opts = false; }
  if ((typeof opts) === 'string') { opts = { dirsep: opts }; }
  dirSep = (String(opts.dirSep || '') || '/');
  paths.forEach(function (path) {
    if (prefix === false) { return; }
    path = String(path);
    if (opts.debug >= 1) { console.log('?: ' + path); }
    if (prefix === true) {
      basePath = prefix = path;
      bpLen = basePath.length;
      return;
    }
    prefix = path.substr(0, bpLen);
    if (prefix === basePath) { return; }
    while (prefix && (prefix !== basePath)) {
      if (opts.debug >= 2) {
        console.log('?< ' + prefix);
        console.log('!= ' + basePath);
      }
      bpLen = basePath.substr(0, bpLen - 1).lastIndexOf(dirSep) + 1;
      if (bpLen > 0) {
        basePath = basePath.substr(0, bpLen);
        prefix = path.substr(0, bpLen);
      } else {
        basePath = '';
        prefix = false;
      }
      if (opts.debug >= 1) { console.log('-> ' + basePath, bpLen); }
    }
    if (opts.debug >= 2) { console.log(''); }
    return;
  });
  return basePath;
};
