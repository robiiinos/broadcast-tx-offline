var axios = require('axios');
var cryptocurrencies = require('./data/cryptocurrencies');

function broadcastTx (cryptocurrency, hash, callback) {
    cryptocurrencies[cryptocurrency].forEach(url => {

        axios.post(url, {
            tx: hash,
          })
          .then((response) => {
              callback(null, response.data.hash)
          })
          .catch((error) => {
              callback(error.response.data.error, null);
          });

    });
}

module.exports = {
    broadcastTx: broadcastTx
};