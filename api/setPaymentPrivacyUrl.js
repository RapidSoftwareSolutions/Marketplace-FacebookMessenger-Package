const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        url,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !url) {
        callback('Fill in required fields', res, {to}, ['pageAccessToken', 'url']);
        return;
    }

    request({ 
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: `https://graph.facebook.com/v2.6/me/thread_settings?access_token=${pageAccessToken}`,
        body: JSON.stringify({
            setting_type: 'payment',
            payment_privacy_url: url
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
