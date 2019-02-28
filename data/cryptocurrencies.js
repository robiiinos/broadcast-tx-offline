module.exports = {
    bitcoin: [
        [ 'POST', 'tx', 'https://api.blockcypher.com/v1/btc/main/txs/push' ],
        [ 'POST', 'tx_hex', 'https://chain.so/api/v2/send_tx/BTC/' ],
    ],
    litecoin: [
        [ 'POST', 'tx', 'https://api.blockcypher.com/v1/ltc/main/txs/push' ],
        [ 'POST', 'tx_hex', 'https://chain.so/api/v2/send_tx/LTC/' ],
    ],
    dogecoin: [
        [ 'POST', 'tx', 'https://api.blockcypher.com/v1/doge/main/txs/push' ],
        [ 'POST', 'tx_hex', 'https://chain.so/api/v2/send_tx/DOGE/' ],
    ],
    dash: [
        [ 'POST', 'tx', 'https://api.blockcypher.com/v1/dash/main/txs/push' ],
        [ 'POST', 'tx_hex', 'https://chain.so/api/v2/send_tx/DASH/' ],
    ],
    zcash: [
        [ 'POST', 'tx_hex', 'https://chain.so/api/v2/send_tx/ZEC/' ],
    ],
};