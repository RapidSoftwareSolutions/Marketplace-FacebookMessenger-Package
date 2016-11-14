const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        PSID,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !PSID) {
        callback('Fill in required fields', res, {to}, ['pageAccessToken', 'PSID']);
        return;
    }

    request({
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: `https://graph.facebook.com/v2.6/me/unlink_accounts?access_token=${pageAccessToken}`,
        body: `{"psid": "${PSID}"}`
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
