# babel-exclude-ignore

By default babel transform ignores evertying in `node_modules`. 
This module allows to include some modules (folders) from project's `node_modules`.

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
you need to import 'steal-inject-script' before importing script.

## install
```bash
npm install babel-exclude-ignore
```
