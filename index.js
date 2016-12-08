'use strict';

const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

const PORT          = process.env.PORT || 8080;

global.PACKAGE_NAME = "FacebookMessenger";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

app.get(`/api/${PACKAGE_NAME}/webhook`, (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === 'verify_token')
        res.status(200).send(req.query['hub.challenge']);
    else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);          
    }
});

app.post(`/api/${PACKAGE_NAME}/webhook`, function(req, res) {
    let data = req.body;
    console.log('call');
    if (data.object == 'page') {
        data.entry.forEach(function(pageEntry) {
            let pageID = pageEntry.id;
            let timeOfEvent = pageEntry.time;

            pageEntry.messaging.forEach(function(messagingEvent) {
                //console.log(messagingEvent);
            });
        });

        res.sendStatus(200);
    }
});

let callback = (err, res, r, fields) => {
    let response = {
        callback     : "",
        contextWrites: {}
    };

    if(err) {
        let e = fields 
            ? {status_code: 'REQUIRED_FIELDS', status_msg: 'Please, check and fill in required fields.', fields}
            : {status_code: 'API_ERROR', status_msg: r.result ? JSON.parse(r.result) : err};

        response.callback = 'error';
        response.contextWrites[r.to] = e;
    } else {
        response.callback = 'success';
        response.contextWrites[r.to] = JSON.parse(r.result);
    }

    res.status(200).send(response);
}

fs.readdirSync('api/').forEach((file) => {
    try {
        var type    = file.substring(file.lastIndexOf('.') + 1),
            route   = file.substring(0, file.length - type.length - 1);

       if(!type == 'js') return;

       let fn = require(`./api/${file}`);
       app.post(`/api/${PACKAGE_NAME}/${route}`, function(req, res) {return fn(req, res, callback)});
    } catch(e) { 
        console.log(e);
        return; 
    }
});

app.listen(PORT);
module.exports = app;

