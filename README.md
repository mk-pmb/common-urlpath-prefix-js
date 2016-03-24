
common-urlpath-prefix
=====================

Computes the longest common base path prefix.

Usage
-----

tbd


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
