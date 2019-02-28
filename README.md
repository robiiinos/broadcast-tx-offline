# broadcast-tx-offline

[![NPM](https://img.shields.io/npm/v/broadcast-tx-offline.svg)](https://www.npmjs.com/package/broadcast-tx-offline)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)

Broadcast your signed transaction to a cryptocurrency network without a local node.

## Installation

```bash
$ npm install broadcast-tx-offline
```

## Example

```javascript
var broadcast = require('broadcast-tx-offline');

broadcast.broadcastTx('bitcoin', '0100000001193f99...', (err, hash) => {
    if (err) {
        return console.log(err);
    }

    return console.log(hash);
});
// => 4e6dfb1415b4fba5bd257c129847c70fbd4e45e41828079c4a282680528f3a50
```

## To Do List

[1] Unit testing.

[2] Support more coins.

[3] Support more API to broadcast for every coins.

## LICENSE

[MIT](LICENSE)