const lib     = require('../lib/functions');
const request = require("request");

module.exports = (req, res, callback) => {
    req.body.args = lib.clearArgs(req.body.args, false);
    let { 
        pageAccessToken,
        recipientId,
        elementTitle,
        elementItemUrl,
        elementImageUrl,
        elementSubtitle,
        title,
        payload,
        paymentSummaryCurrency,
        paymentSummaryPaymentType,
        paymentSummaryMerchantName,
        paymentSummaryRequestedUserInfo,
        paymentSummaryPriceList,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!pageAccessToken 
        || !payload 
        || !title 
        || !recipientId
        || !paymentSummaryCurrency 
        || !paymentSummaryPaymentType 
        || !paymentSummaryMerchantName
        || !paymentSummaryMerchantName
        || !paymentSummaryRequestedUserInfo
        || !paymentSummaryPriceList
    ) {
        callback('Fill in required fields.', res, {to});
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
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements: [lib.clearArgs({
                            title: elementTitle,
                            item_url: elementItemUrl,
                            image_url: elementImageUrl,
                            subtitle: elementSubtitle,
                            
                            buttons: [{
                                type: "payment",
                                title: title,
                                payload: payload,
                                payment_summary: {
                                    currency: paymentSummaryCurrency,
                                    merchant_name: paymentSummaryMerchantName,
                                    requested_user_info: paymentSummaryRequestedUserInfo,
                                    payment_type: paymentSummaryPaymentType,
                                    price_list: paymentSummaryPriceList
                                }
                            }]
                        }, true)]
                    }
                }
            }
        })
    },
    (err, response, result) => {
        err = err ? err : response.statusCode !== 200;
        callback(err, res, {to, result})
    });

}
