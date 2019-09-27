# Scripts for Watching and Building Vanilla JS and CSS for Modern Browsers

When creating Landing pages, sites, and other projects where you don't want or need the overhead of libraries like [React](https://reactjs.org), [jQuery](https://jquery.com/), or [Bootstrap](https://getbootstrap.com/), among many others, these scripts allow you to write code in the most modern JavaScript and use future-oriented CSS and have them transpiled, polyfilled, and minified for final production. The scripts bundle all the JavaScript into a single, minified file, as it also does for all the CSS. If you have a large number of files that contain large amounts of code, you should consider using tools like Webpack instead of these scripts. These are for small to not-quite-moderate sized projects, but quite helpful for excluding common libraries like `jQuery`. Though, you could probably find a way to reconfigure these scripts for styling templated views and partials.

Using watching tools like `chokidar` and `browser-sync` running these scripts during development allows `hot-reloading` of html pages in the browser with every saved-change.

I borrowed the main ideas for these scripts from a colleague, [David Orick](https://github.com/dorickweb) :trophy: :1st_place_medal:, and tweaked them with updated version of `Babel`, added `PostCSS`, and enabled `browser-sync`. 

## Usage

First, Fork or Clone the repo and install:

```bash
git clone https://github.com/wesleylhandy/css-js-processing-boilerplate.git
yarn install
```

This will install the following dev dependences:

```json
"devDependencies": {
    "@babel/cli": "^7.6.2",
    "@babel/core": "^7.6.2",
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "@babel/preset-env": "^7.6.2",
    "autoprefixer": "^9.6.1",
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "browser-sync": "^2.26.7",
    "chokidar-cli": "^2.0.0",
    "core-js": "^3.2.1",
    "cssnano": "^4.1.10",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^6.1.3",
    "postcss-normalize": "^8.0.1",
    "postcss-preset-env": "^6.7.0",
    "uglify-js": "^3.6.0"
}
```

With the following scripts:

```json
"scripts": {
    "css-build-task:postcss": "postcss client/src/css/*.css --use postcss-preset-env cssnano -d client/processed/css/ ",
    "css-build-task:concat-css": "cat client/processed/css/*.css > client/public/dist/css/index.min.css",
    "js-build-task:babel": "babel client/src/js -d client/processed/js --presets=@babel/preset-env",
    "js-build-task:concat-js": "cat client/processed/js/*.js > client/processed/js/all.js",
    "js-build-task:uglify-js": "uglifyjs client/processed/js/all.js -o client/public/dist/js/index.min.js -c -m",
    "tools:buildjs": "npm-run-all -s js-build-task:*",
    "tools:buildcss": "npm-run-all -s css-build-task:*",
    "tools:jswatch": "chokidar 'client/src/js/*.js' -c 'npm run tools:buildjs'",
    "tools:csswatch": "chokidar 'client/src/css/*.css' -c 'npm run tools:buildcss'",
    "tools:browser-sync": "browser-sync start -s 'client/public' --files 'client/public/dist/css/*.css' 'client/public/dist/js/*.js'",
    "dev": "npm-run-all -p tools:*"
}
```

### Modifying `.babelrc`, `.browserslistrc`, and `postcss.config.js`

Firstly, you can simply use the setup that I have initialized. But you can always add new plugins for either `babel` or `postcss`. Do so within the respective `.babelrc` and `postcss.config.js`. Refer to the appropriate documentation for other options you want to include: [`babel-cli` docs](https://babeljs.io/docs/en/babel-cli), [`postcss-cli` docs](https://github.com/postcss/postcss-cli), and [`postcss-preset-env` docs](https://preset-env.cssdb.org/).

I have added support for the last two versions of each browser and any browser with greater than 0.5% coverage, plus IE 11 :cry:. Again, refer to documentation for what you would like to do differently: [`browserslist` docs](https://github.com/browserslist/browserslist).

### Project Architecture

```
\ root
    .babelrc
    .browserslistrc
    package.json
    postcss.config.js
    -- client
        -- processed # temporary folder, for holding files prior to concatenization
        -- public
            index.html
            ... other html pages
            -- dist
                -- css
                    index.min.css
                -- js
                    index.min.js
        -- src
            -- css
            -- js
```

### How to the scripts work?

You must develop all your scripts, stylesheets, and their dependencies within the `src` folder. The final product of the processing scripts will be found within the `dist` folder with the names of `index.min.js` and `index.min.css`, respectively.

After installing the dependencies and creating the necessary file structure, the main script for running the entire process is:

```bash
npm run dev
```

This initiates the first build of JS and CSS and adds watchers to all the `js` and `css` files within the `client/src` directory. It also serves all the files within the `client/public` directory and watches for changes to the final builds of `js` and `css` within the `client/public/dist` folder. 

When you create new `html` pages, you can include the build versions of `js` and `css` with the following tags:

```html
<link href="/dist/css/index.min.css" rel="stylesheet">
<script src="/dist/js/index.min.js"></script>
```

Note, the above tags assume the `public` folder will remain at the root of the deployed application.

## TODO

 - Develop this into a npm package that takes in certain options and provides a single script to run those options for any given repo.


## Authors

 - [David Orick](https://github.com/dorickweb) - the inspiration
 - [Wesley L. Handy](https://github.com/wesleylhandy)

## Contributing

Have better solutions (other than `webpack` or `browserify` or `parcel` or any other known bundlers), want to contribute new features, like dealing with `sass`,`scss`, or `ts`, or whatever, or have a clear idea on moving this towards either a `cli` or `npm` package in and of itself?

 - fork this repo, and `git clone` your fork locally
 - `yarn` or `npm install`
 - create new branch
 - submit pull request

## License

The MIT License (MIT)

Copyright (c) 2019 Wesley L. Handy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.