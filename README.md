# try-webpack

# This is a simple example about how to use using `webpack` to package out components.

* We will have 3 main modules
  * Common
    * Auth (aka authentication)
      * modules..
    * Util (aka Utility)
      * modules..
  * Admin
    * Component
      * modules...
    * Service
      * modules...
  * Shop
    * Component
      modules...
    * Service
      * modules...

> By using `webpack`, we will pack everything in side a main module to a single file.
Then we have 3 files after packing:
* common.js
* admin.js
* shop.js

> We can load html into the source directly via `require('file.html');`
