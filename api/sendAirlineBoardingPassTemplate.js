const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        recipientId,
        introMessage,
        locale,
        themeColor,
        boardingPass,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken 
        || !recipientId
        || !introMessage 
        || !locale 
        || !boardingPass
    ) {
        callback('Fill in required fields: pageAccessToken, recipientId, introMessage, locale, boardingPass', res, {to});
        return;
    }

    try {
        boardingPass = JSON.parse(boardingPass);
    } catch (e) {
        callback('Invalid boardingPass JSON value.', res, {to});
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
                    payload: lib.clearArgs({
                        template_type: "airline_boardingpass",
                        intro_message: introMessage,
                        locale: locale,
                        boarding_pass: boardingPass
                    }, true)
                }
            }
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
