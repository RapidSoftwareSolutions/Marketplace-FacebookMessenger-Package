const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);    

    let { 
        pageAccessToken,
        elementTitle,
        elementItemUrl,
        elementImageUrl,
        elementSubtitle,
        recipientId,
        title,
        payload,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !title || !recipientId) {
        callback('Fill in required fields.', res, {to});
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
                        template_type: "generic",
                        elements: [{
                            title: elementTitle,
                            item_url: elementItemUrl,
                            image_url: elementImageUrl,
                            subtitle: elementSubtitle,
                            
                            buttons: [lib.clearArgs({
                                type: "postback",
                                title,
                                payload
                            })]
                        }]
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
