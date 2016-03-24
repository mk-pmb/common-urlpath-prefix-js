#!/usr/bin/env nodejs
/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';
var cup = require('common-urlpath-prefix'), paths = process.argv.slice(2);
console.log(cup(paths, { sep: process.env.CUP_SEP }));
