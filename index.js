var axios = require('axios');
var util = require('./util/util');
var cryptocurrencies = require('./data/cryptocurrencies');

function broadcastTx (cryptocurrency, hash, callback) {
    cryptocurrencies[cryptocurrency].forEach(row => {

        var payload = {};
        payload[row[1]] = hash;

        axios.post(row[2], payload)
          .then((response) => {
            var success = util.parseSuccess(response);

            callback(null, success);
          })
          .catch((response) => {
              var error = util.parseError(response);

              callback(error, null);
          });

    });
}

module.exports = {
    broadcastTx: broadcastTx
};