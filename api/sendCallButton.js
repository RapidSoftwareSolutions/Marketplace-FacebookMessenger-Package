const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);
    let { 
        pageAccessToken,
        title,
        text,
        payload,
        recipientId,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !recipientId || !title || !payload) {
        callback('Fill in required fields', res, {to}, 
            ['recipientId', 'title', 'payload']);
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
            message: {
                attachment: { 
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: text,
                        buttons: [lib.clearArgs({
                            type: "phone_number",
                            title,
                            payload
                        })]
                    }
                }
            }
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
