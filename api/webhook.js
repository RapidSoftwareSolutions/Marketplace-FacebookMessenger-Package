const lib = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {
    const {
        body
    } = req.body.args;
    const challenge = body["hub.challenge"];

    const r = {
        callback: 'success',
        contextWrites: {
            to: {
                http_resp: challenge || '',
                client_msg: body
            }
        }
    };

    res.status(200).send(r);
}
