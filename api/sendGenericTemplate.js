const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    let { 
        pageAccessToken,
        recipientId,
        elements,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !recipientId || !elements) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    try {
        elements = JSON.parse(elements);
    } catch (e) {
        callback('Invalid elements JSON syntax.', res, {to});
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
            message:{
                attachment:{
                    type: "template",
                    payload: {
                        template_type:"generic",
                        elements: elements
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
