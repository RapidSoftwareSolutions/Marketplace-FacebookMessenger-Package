const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        callToActions,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !callToActions) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    try {
        callToActions = JSON.parse(callToActions)
    } catch(e) {
        callback('Invalid callToActions JSON value.', res, {to});
        return;
    }

    request({ 
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: `https://graph.facebook.com/v2.6/me/thread_settings?access_token=${pageAccessToken}`,
        body: JSON.stringify({
            setting_type: 'call_to_actions',
            thread_state: 'existing_thread',
            call_to_actions: callToActions
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
