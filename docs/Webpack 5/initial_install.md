# Initial Install

### How to build a project with webpack and react ?

```js title="devDependencies / about babel & webpack"
    "@babel/core": "^7.20.12",
    "@babel/eslint-parser": "^7.19.1",
    "@babel/plugin-transform-runtime": "^7.19.6",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@babel/runtime": "^7.20.7",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^9.1.2",
    "webpack": "^5.75.0",
    "webpack-bundle-analyzer": "^4.8.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1",
    "webpack-server": "^0.1.2",

```

```js title="devDependencies/ about css & html"
 "css-loader": "^6.7.3",
 "html-webpack-plugin": "^5.5.0",
 "mini-css-extract-plugin": "^2.7.2",
 "style-loader": "^3.3.1",
```

_save 是預設，可以忽略不寫。_

devDependencies，在開發(dev)或測試時會用到的，像是 babel 和 webpack。build 完後，不會需要的。

```bash
npm i <package name> --save-dev
# or
npm i <package name> -D
```

```js title="dependencies"
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.7.0",
```

dependencies，直接用到的那些套件。build 完後，還會需要的。

```bash
npm i <package name> --save
# or
npm i <package name>
```
