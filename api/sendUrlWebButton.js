const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);
    let { 
        pageAccessToken,
        recipientId,
        title,
        url,
        webviewHeightRatio,
        messengerExtensions,
        fallbackUrl,
        elementTitle,
        elementItemUrl,
        elementImageUrl,
        elementSubtitle,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !recipientId || !title || !url) {
        callback('Fill in required fields', res, {to}, ['pageAccessToken', 'recipientId', 'title', 'url']);
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
                        elements: [lib.clearArgs({
                            title: elementTitle,
                            item_url: elementItemUrl,
                            image_url: elementImageUrl,
                            subtitle: elementSubtitle,
                            
                            buttons: [{
                                type: "web_url",
                                url,
                                title,
                                webview_height_ratio: webviewHeightRatio,
                                messenger_extensions: messengerExtensions,
                                fallback_url: fallbackUrl
                            }]
                        }, true)]
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
