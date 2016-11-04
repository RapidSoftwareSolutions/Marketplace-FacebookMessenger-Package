const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);

    let { 
        pageAccessToken,
        whitelistedDomains,
        domainActionType,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !whitelistedDomains || !domainActionType) {
        callback('Fill in required fields: pageAccessToken, whitelistedDomains, domainActionType', res, {to});
        return;
    }

    try {
        whitelistedDomains = JSON.parse(whitelistedDomains);
    } catch(e) {
        callback('Invalid whitelistedDomains value. Use ["https://domain.com"] syntax.', res, {to});
    }

    request({ 
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        url: `https://graph.facebook.com/v2.6/me/thread_settings?access_token=${pageAccessToken}`,
        body: JSON.stringify({
            setting_type: 'domain_whitelisting',
            domain_action_type: domainActionType,
            whitelisted_domains: whitelistedDomains
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });
}
