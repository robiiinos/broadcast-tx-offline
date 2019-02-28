# broadcast-tx-offline

## Example

```javascript
var broadcast = require('broadcast-tx-offline');

broadcast.broadcastTx('bitcoin', '01000000011935b41d12936df99...', (err, hash) => {
    if (err) {
        return console.log(err);
    }

    return console.log(hash);
});
```

## LICENSE [MIT](LICENSE)