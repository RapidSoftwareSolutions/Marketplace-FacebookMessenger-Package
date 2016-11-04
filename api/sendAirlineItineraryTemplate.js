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
        passengerInfo,
        passengerSegmentInfo,
        flightInfo,
        priceInfo,
        basePrice,
        tax,
        totalPrice,
        currency,
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
        || !passengerInfo
        || !flightInfo
        || !passengerSegmentInfo
        || !totalPrice
        || !currency
    ) {
        callback('Fill in required fields: pageAccessToken, recipientId, introMessage, locale, pnrNumber, passengerInfo, flightInfo, passengerSegmentInfo, totalPrice, currency', res, {to});
        return;
    }

    try {
        if(passengerInfo) passengerInfo = JSON.parse(passengerInfo);
        if(flightInfo) flightInfo = JSON.parse(flightInfo);
        if(passengerSegmentInfo) passengerSegmentInfo = JSON.parse(passengerSegmentInfo);
        if(priceInfo) priceInfo = JSON.parse(priceInfo);
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
                        template_type: "airline_itinerary",
                        intro_message: introMessage,
                        locale: locale,
                        pnr_number: pnrNumber,
                        passenger_info: passengerInfo,
                        flight_info: flightInfo,
                        passenger_segment_info: passengerSegmentInfo,
                        price_info: priceInfo,
                        base_price: basePrice,
                        tax: tax,
                        total_price: totalPrice,
                        currency: currency
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
