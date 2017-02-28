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
            to: ''
        }
    };

    if (challenge || token) {
        r.callback = 'success';
        r.contextWrites.to = JSON.stringify({
            http_resp: challenge || token,
            client_msg: body,
            socket_token: ''
        });
    } else {
        console.log(params, body.entry[0])
        const found = params.find(param => param.page_id === body.entry[0].id);
        if (!found) {
            r.callback = 'error';
            r.contextWrites.to = JSON.stringify({
                http_resp: '',
                client_msg: 'Mismatching tokens',
                socket_token: ''
            });            
        } else {
            r.callback = 'success';
            r.contextWrites.to = JSON.stringify({
                http_resp: '',
                client_msg: body,
                socket_token: found._rapid_socket_token
            });
        }
    }
    res.status(200).send(r);
}
