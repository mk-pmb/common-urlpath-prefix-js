/*jslint indent: 2, maxlen: 80, node: true */
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

demo.chap('Paths are not resolved:');
same        = '/etc/hostname';
other       = '/etc/./hostname';
yetanother  = '//etc/hostname';
cup([same, other]);         // -> "/etc/"
cup([same, yetanother]);    // -> "/"

demo.chap('Simple DOS-style paths:');
same        = "C:\\WFW311\\SMARTDRV.EXE";
other       = "C:\\WFW311\\HIMEM.SYS";
yetanother  = "C:\\AUTOEXEC.BAT";
cup([same, other], "\\");               // -> "C:\\WFW311\\"
cup([same, other, yetanother], "\\");   // -> "C:\\"
other       = "C:\\AUTORUN.INF";
cup([other, yetanother], "\\");         // -> "C:\\" (not: "C:\\AUTO")

demo.chap('UNC paths:');
same        = "\\\\pandora\\box\\README.txt";
other       = "\\\\pandora\\box\\AUTORUN.INF";
yetanother  = "\\\\hermes\\legal\\cargo.doc";
cup([same, other], "\\");               // -> "\\\\pandora\\box\\"
cup([same, other, yetanother], "\\");   // -> "\\\\"
other       = "\\\\hermes\\legends\\hades.gpx";
cup([other, yetanother], "\\");         // -> "\\\\hermes\\" (not: …"\\leg")

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
