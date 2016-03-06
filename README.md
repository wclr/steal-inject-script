# steal-inject-script

Allows to load scripts with [StealJs](https://github.com/stealjs/steal) and [System.js](https://github.com/systemjs/systemjs) using script tag. 

## usage

```js
// configure script at the point of usage
import injectScript from 'steal-inject-script'
injectScript('my-script', 'http://some.external.domain.com/my-script.js')

System.import('my-script').then(_ => ...)
```

Or you may define it in `system config` or `package.json` using `paths` and `meta`
```js
"system": {
  "paths": {
    "my-script": "http://some.external.domain.com/my-script.js"
  },
  "meta": {
    "my-script": {"injectScript": true}
  }
}
```
Note: you need to import `steal-inject-script` before importing script.

## install
```bash
npm install steal-inject-script
```
