const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        userId,
        fields,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !userId || !fields) {
        callback('Fill in required fields', res, {to}, ['pageAccessToken', 'userId', 'fields']);
        return;
    }

    if(typeof fields == "object") {
        fields = fields.join();
    }

    request({
        method: 'GET',
        url: `https://graph.facebook.com/v2.6/${userId}?fields=${fields}&access_token=${pageAccessToken}`,
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
