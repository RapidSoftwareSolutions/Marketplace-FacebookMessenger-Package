const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    //req.body.args = lib.clearArgs(req.body.args, false);
    let { 
        pageAccessToken,
        recipientId,
        recipientName,
        orderNumber,
        currency,
        timestamp,
        paymentMethod,
        orderUrl,
        elements,
        addressStreet1,
        addressStreet2,
        addressCity,
        addressPostalCode,
        addressState,
        addressCountry,
        summarySubtotal,
        summaryshippingCost,
        summaryTotalTax,
        summaryTotalCost,
        adjustments,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken || !recipientId || !recipientName || !orderNumber || !currency || !paymentMethod || !elements) {
        callback('Fill in required fields.', res, {to});
        return;
    }

    try {
        elements = JSON.parse(elements);
        if(adjustments) adjustments = JSON.parse(adjustments);
    } catch (e) {
        callback('Invalid elements or adjustments JSON syntax.', res, {to});
        console.log(e);
        return;
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
                    type:"template",
                    payload: lib.clearArgs({
                        template_type: "receipt",
                        recipient_name: recipientName,
                        order_number: orderNumber,
                        currency: currency,
                        payment_method: paymentMethod,        
                        order_url: orderUrl,
                        timestamp: timestamp, 
                        elements: elements,
                        address:{
                            street_1: addressStreet1,
                            street_2: addressStreet2,
                            city: addressCity,
                            postal_code: addressPostalCode,
                            state: addressState,
                            country: addressCountry
                        },
                        summary:{
                            subtotal: summarySubtotal,
                            shipping_cost: summaryshippingCost,
                            total_tax: summaryTotalTax,
                            total_cost: summaryTotalCost
                        },
                        adjustments: adjustments
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
