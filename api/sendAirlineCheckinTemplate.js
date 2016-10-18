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
        pnrNumber,
        flightInfo,
        checkinUrl,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken 
        || !recipientId
        || !introMessage 
        || !locale 
        || !pnrNumber 
        || !flightInfo
        || !checkinUrl
    ) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    try {
        flightInfo = JSON.parse(flightInfo);
    } catch (e) {
        callback('Invalid JSON value.', res, {to});
    }
    console.log(flightInfo)
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
                        template_type: "airline_checkin",
                        intro_message: introMessage,
                        locale: locale,
                        pnr_number: pnrNumber,
                        flight_info: flightInfo,
                        checkin_url: checkinUrl
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
