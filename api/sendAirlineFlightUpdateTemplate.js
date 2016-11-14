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
        updateType,
        updateFlightInfoFlightNumber,
        updateFlightInfoDepartureAirport,
        updateFlightInfoArrivalAirport,
        updateFlightInfoFlightSchedule,
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
        || !updateFlightInfoFlightNumber
        || !updateFlightInfoDepartureAirport
        || !updateFlightInfoArrivalAirport
        || !updateFlightInfoFlightSchedule
        || !updateType
    ) {
        callback('Fill in required fields', res, {to}, 
            ['pageAccessToken', 'introMessage', 'locale', 'pnrNumber', 'updateFlightInfoFlightNumber', 'updateFlightInfoDepartureAirport', 'updateFlightInfoArrivalAirport', 'updateFlightInfoFlightSchedule', 'updateType']);
        return;
    }

    try {
        if(updateFlightInfoDepartureAirport && typeof updateFlightInfoDepartureAirport == 'string') updateFlightInfoDepartureAirport = JSON.parse(updateFlightInfoDepartureAirport);
        if(updateFlightInfoArrivalAirport && typeof updateFlightInfoArrivalAirport == 'string') updateFlightInfoArrivalAirport = JSON.parse(updateFlightInfoArrivalAirport);
        if(updateFlightInfoFlightSchedule && typeof updateFlightInfoFlightSchedule == 'string') updateFlightInfoFlightSchedule = JSON.parse(updateFlightInfoFlightSchedule);
    } catch (e) {
        callback('Invalid JSON value.', res, {to});
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
                        template_type: "airline_update",
                        intro_message: introMessage,
                        update_type: updateType,
                        locale: locale,
                        pnr_number: pnrNumber,
                        update_flight_info: {
                            flight_number: updateFlightInfoFlightNumber,
                            arrival_airport: updateFlightInfoArrivalAirport, 
                            departure_airport: updateFlightInfoDepartureAirport,
                            flight_schedule: updateFlightInfoFlightSchedule
                        }
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
