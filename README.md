
common-urlpath-prefix
=====================

Computes the longest common base path prefix.

Usage
-----

API:
```javascript
var cup = require('common-urlpath-prefix'),
  paths = process.argv.slice(2),
  opts = { sep: '/' };

console.dir(cup(paths, opts));
console.dir(cup(paths));
console.dir(cup(paths, '/'));
```

For details see [`doc/demo/usage.js`](doc/demo/usage.js).

CLI:
```bash
$ common-urlpath-prefix $(find /usr/share/apache2/ -name '*.png')
/usr/share/apache2/icons/
$ CUP_SEP=. common-urlpath-prefix /etc/apparmor.d/*d
/etc/apparmor.d/usr.sbin.
$ CUP_SEP=. common-urlpath-prefix $(git config --list | grep rig)
remote.origin.
```

You can use `.cfg(defaultOpts)` to get a wrapper for `cup()` with custom
default options:
```javascript
var cupBksl = require('common-urlpath-prefix').cfg({ sep: "\\" });
console.dir(cupBksl(["C:\\Users\\Alice", "C:\\Users\\Bob"]));
```


Comparison to other modules
---------------------------

Major differences from [lcp](https://www.npmjs.com/package/lcp)
and [common-prefix](https://www.npmjs.com/package/common-prefix):
  * CUP splits at directory seperators only.

Major differences from
[common-path-prefix](https://www.npmjs.com/package/common-path-prefix):
  * CUP doesn't sort. Each original path is checked only once, and the number
    of splits is limited by the current longest prefix, so complexity should
    be `O(n)`.
  * CUP accepts URLs.
  * CUP will return the full original path if only one path/URL is given
    or all given paths are equal.



License
-------
ISC
