const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        appId,
        pageAccessToken,
        pageId,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !appId || !pageId) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    request.post({ 
        url: `https://graph.facebook.com/v2.6/${appId}/subscriptions_sample`,
        formData: {
            'object_id': pageId,
            'object': 'page',
            'field': 'messages',
            'custom_fields': `{"page_id": ${pageId}}`,
            'access_token': pageAccessToken
        }
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
