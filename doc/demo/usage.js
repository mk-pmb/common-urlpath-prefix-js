﻿/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var cup = require('common-urlpath-prefix'),
  same        = 'ftp://example.net/demo/same.txt',
  other       = 'ftp://example.net/demo/other.txt',
  yetanother  = 'ftp://example.net/yet/another.txt',
  demo = require('./lib_demo_util.js');

cup = demo.logwrap(cup);

demo.chap('All-the-same URLs:');
cup([same]);                // -> "ftp://example.net/demo/same.txt"
cup([same, same, same]);    // -> "ftp://example.net/demo/same.txt"

demo.chap('Different URLs:');
cup([same, other]);                 // -> "ftp://example.net/demo/"
cup([same, other, yetanother]);     // -> "ftp://example.net/"
cup([same, same.replace(/\.net/, '.com')]);     // -> "ftp://"
cup([same, same.replace(/^ftp/, 'http')]);      // -> ""

demo.chap('Custom path separator:');
same        = 'Edit -> Prefs -> Advanced -> Enable JavaScript';
other       = 'Edit -> Prefs -> Advanced -> Allow Popups';
yetanother  = 'Edit -> Select all';
cup([same, other], { sep: ' -> ' });      // -> "Edit -> Prefs -> Advanced -> "
cup([same, other, yetanother], ' -> ');   // -> "Edit -> "
cup([same, other, yetanother], '->');     // -> "Edit ->"

demo.chap('Unusual inputs:');
cup([]);              // -> ""
cup(same, same);      // !! TypeError: paths.forEach is not a function
cup(1);               // !! TypeError: paths.forEach is not a function
cup(true);            // !! TypeError: paths.forEach is not a function
cup(null);            // !! TypeError: Cannot read property 'forEach' of null
cup([123, 124, 125]); // -> ""