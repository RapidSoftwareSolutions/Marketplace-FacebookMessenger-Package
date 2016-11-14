const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken) {
        callback('Fill in required fields', res, {to}, ['pageAccessToken']);
        return;
    }

    request.post(`https://graph.facebook.com/v2.8/me/subscribed_apps?access_token=${pageAccessToken}`, (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
