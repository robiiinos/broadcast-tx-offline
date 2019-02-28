function parseSuccess(response) {
    return response.response.data.hash || response.response.data.txid;
}

function parseError(response) {
    return response.response.data.error || response.response.data.data.tx_hex;
}

module.exports = {
    parseSuccess: parseSuccess,
    parseError: parseError
};