const lib = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {
    const {
        params, body, headers
    } = req.body.args;
    const challenge = body["hub.challenge"];
    const token = body["hub.token"];
    const r = {
        callback: '',
        contextWrites: {
            to: {}
        }
    };

    if (challenge || token) {
        r.callback = 'success';
        r.contextWrites.to = JSON.stringify({
            http_resp: challenge || token,
            client_msg: body,
            params: []
        });
    } else if (!body.entry[0]) {
        r.callback = 'error';
        r.contextWrites.to = JSON.stringify({
            http_resp: '',
            client_msg: 'Bad request',
            params: []
        });
    } else {
        const found = params.filter(param => param.page_id == body.entry[0].id);
        if (!found.length) {
            r.callback = 'error';
            r.contextWrites.to = JSON.stringify({
                http_resp: '',
                client_msg: 'Mismatching tokens',
                params: []
            });            
        } else {
            r.callback = 'success';
            r.contextWrites.to = JSON.stringify({
                http_resp: '',
                client_msg: body,
                params: found
            });
        }
    }

    res.status(200).send(r);
}
