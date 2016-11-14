const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        recipientId,
        message,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !recipientId || !message) {
        callback('Fill in required fields', res, {to}, 
            ['pageAccessToken', 'recipientId', 'message']);
        return;
    }

    try {
        if(typeof message == 'string') message = JSON.parse(message)
    } catch (e) {
        callback('Invalid message object.', res, {to});
        return;
    }

    request({
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: `https://graph.facebook.com/v2.6/me/messages?access_token=${pageAccessToken}`,
        body: JSON.stringify({
            recipient: {
                id: recipientId
            },
            message: message
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
