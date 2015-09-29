Remember that we're creating an Angular front-end application to consume a Rails backend. So, all we need is the Angular front-end.

- check out this Angular tutorial out. [page](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
- enter the json into bower.json from the tutorial. It tells 'bower install' what to install.
- create the .bowerrc and type in json with a directory key which tells you whenever you run bower.json, where to install files into
- run bower install and see the public/libs files created which will contain folders like angular, angular-route, angular-animate.
- create a index.html in the top level of the public folder.
- In the index.html, include script tags that include teh angular.min.js file and any controllers we make.
- use python -m SimpleHTTPServer 5555 to run the server
