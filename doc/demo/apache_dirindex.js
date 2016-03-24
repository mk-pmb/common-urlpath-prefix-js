/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var vcup = require('./lib_demo_util.js').vcup, urls = [
  'http://example.net/pics/icons/?C=N;O=D',
  'http://example.net/pics/icons/?C=M;O=A',
  'http://example.net/pics/icons/?C=S;O=A',
  'http://example.net/pics/icons/?C=D;O=A',
  'http://example.net/pics/icons/err.png',
  'http://example.net/pics/icons/ok.png',
  'http://example.net/pics/icons/wire.png',
];

vcup(urls);
vcup(urls.concat(['http://example.net/pics/']));
vcup(urls.concat(['http://example.net/pics/other/']));
vcup(urls.concat(['http://another.site/pics/']));
vcup(urls.concat(['ftp://another.site/pics/']));
