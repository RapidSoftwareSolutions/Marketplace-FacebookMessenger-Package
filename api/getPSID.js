const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        accountLinkingToken,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !accountLinkingToken) {
        callback('Fill in required fields: pageAccessToken, accountLinkingToken', res, {to});
        return;
    }

    request({ 
        method: 'GET',
        url: `https://graph.facebook.com/v2.6/me?access_token=${pageAccessToken}&fields=recipient&account_linking_token=${accountLinkingToken}`,
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
