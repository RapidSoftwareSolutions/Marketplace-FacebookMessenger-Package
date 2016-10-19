const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const
    updateFlightInfoFlightNumber = 'KL123', 
    updateType = 'delay', 
    checkinUrl = 'https://www.airline.com/check-in', 
    totalPrice = '14003', 
    tax = '200', 
    basePrice = '12206', 
    pnrNumber = 'ABCDEF', 
    themeColor = '', 
    locale = 'en_US', 
    introMessage = 'Test', 
    paymentSummaryPriceList = '', 
    paymentSummaryRequestedUserInfo = '', 
    paymentSummaryMerchantName = '', 
    paymentSummaryPaymentType = '', 
    paymentSummaryCurrency = '', 
    fallbackUrl = '', 
    messengerExtensions = '', 
    webviewHeightRatio = '', 
    elementSubtitle = 'Subtitle', 
    elementImageUrl = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 
    elementItemUrl = 'https://google.com', 
    elementTitle = 'Title', 
    title = 'title', 
    adjustments = '', 
    summaryTotalCost = 56.14, 
    summaryTotalTax = 6.19, 
    summaryshippingCost = 4.95, 
    summarySubtotal = 75.00, 
    addressCountry = 'US', 
    addressState = 'CA', 
    addressPostalCode = '94025', 
    addressCity = 'Menlo Park', 
    addressStreet2 = '', 
    addressStreet1 = '1 Hacker Way', 
    timestamp = '', 
    orderUrl = 'http://petersapparel.parseapp.com/order?order_id=123456', 
    paymentMethod = 'Visa 2345', 
    currency = 'USD', 
    orderNumber = '12345678902', 
    recipientName = 'Ivan Ivanov', 
    elements = '', 
    PSID = '', 
    accountLinkingToken = '', 
    key = 'key', 
    url = 'https://google.com', 
    domainActionType = 'add', 
    whitelistedDomains = '["https://facebook.com"]', 
    text = 'hi', 
    payload = 'payload', 
    callToActions = '', 
    fields = 'first_name', 
    userId = '100013823139923', 
    image = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 
    senderAction = 'typing_on', 
    pageId = '1105672416206825', 
    appId = '1714338375554370', 
    message = 'Hello', 
    pageAccessToken = 'EAAYXLoHmVUIBANxqy9qW92Rcr46fqU6pXxuJAhjSkvbrZAYpZBLK0R6p8v6mJ3GdN2g3zNoiSifGkNLiw2lM71A0cWRwCuyhEjzpZCqOtl4r3mp33FZCxMmyDv9ZBuhgLhW6zRZADb8FAJdeuh2uWLkPZCFUntYgXwQl1RO56TXMFVFS7J4NjjO', 
    recipientId = '1157490301006750'; 
    

describe(''+ PACKAGE_NAME +' package', () => {   
it('/sendTextMessage', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendTextMessage')
    .send({args:{ recipientId, pageAccessToken, message,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

/*it('/subscribeAppToPage', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/subscribeAppToPage')
    .send({args:{ pageAccessToken,}})
    .expect(200)
    .then((res) => {});
});*/

it('/validateWebhook', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/validateWebhook')
    .send({args:{ pageAccessToken, appId, pageId,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendAction', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAction')
    .send({args:{ pageAccessToken, recipientId, senderAction,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendImage', function() {
    this.timeout(10000);

    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendImage')
    .send({args:{ pageAccessToken, recipientId, image,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/getUserProfile', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/getUserProfile')
    .send({args:{ pageAccessToken, userId, fields,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/setPersistentMenu', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setPersistentMenu')
    .send({args:{ pageAccessToken, callToActions: JSON.stringify([
    {
      "type":"postback",
      "title":"Help",
      "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_HELP"
    },
    {
      "type":"postback",
      "title":"Start a New Order",
      "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_START_ORDER"
    }
  ])}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/deletePersistentMenu', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/deletePersistentMenu')
    .send({args:{ pageAccessToken,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/setGetStartedButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setGetStartedButton')
    .send({args:{ pageAccessToken, payload,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/deleteGetStartedButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/deleteGetStartedButton')
    .send({args:{ pageAccessToken,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/setGreetingText', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setGreetingText')
    .send({args:{ pageAccessToken, text,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/deleteGreetingText', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/deleteGreetingText')
    .send({args:{ pageAccessToken }})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/setWhitelist', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setWhitelist')
    .send({args:{ pageAccessToken, whitelistedDomains, domainActionType,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

/*it('/setPaymentPrivacyUrl', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setPaymentPrivacyUrl')
    .send({args:{ pageAccessToken, url,}})
    .expect(200)
    .then((res) => {});
});

it('/setPaymentPublicKey', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/setPaymentPublicKey')
    .send({args:{ pageAccessToken, key,}})
    .expect(200)
    .then((res) => {});
});

it('/getPSID', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/getPSID')
    .send({args:{ pageAccessToken, accountLinkingToken,}})
    .expect(200)
    .then((res) => {});
});

it('/unlinkPSID', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/unlinkPSID')
    .send({args:{ pageAccessToken, PSID,}})
    .expect(200)
    .then((res) => {});
});
*/
it('/sendQuickReplyButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendQuickReplyButton')
    .send({args:{ pageAccessToken, recipientId, message: JSON.stringify({
    "text":"Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Red",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
      },
      {
        "content_type":"text",
        "title":"Green",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
      }
    ]
  })}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendShareLocationReplyButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendShareLocationReplyButton')
    .send({args:{ pageAccessToken, recipientId, text}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendGenericTemplate', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendGenericTemplate')
    .send({args:{ pageAccessToken, recipientId, elements: JSON.stringify([
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"https://petersfancybrownhats.com/company_image.png",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ])}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendButtonTemplate', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendButtonTemplate')
    .send({args:{ pageAccessToken, recipientId, buttons: JSON.stringify([
      {
        "type":"web_url",
        "url":"https://petersapparel.parseapp.com",
        "title":"Show Website"
      },
      {
        "type":"postback",
        "title":"Start Chatting",
        "payload":"USER_DEFINED_PAYLOAD"
      }
    ]), text}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendReceiptTemplate', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendReceiptTemplate')
    .send({args:{ pageAccessToken, recipientId, recipientName, orderNumber, currency, paymentMethod, orderUrl, timestamp, elements: JSON.stringify([
      {
        "title":"Classic White T-Shirt",
        "subtitle":"100% Soft and Luxurious Cotton",
        "quantity":2,
        "price":50,
        "currency":"USD",
        "image_url":"http://petersapparel.parseapp.com/img/whiteshirt.png"
      },
      {
        "title":"Classic Gray T-Shirt",
        "subtitle":"100% Soft and Luxurious Cotton",
        "quantity":1,
        "price":25,
        "currency":"USD",
        "image_url":"http://petersapparel.parseapp.com/img/grayshirt.png"
      }
    ]), addressStreet1, addressStreet2, addressCity, addressPostalCode, addressState, addressCountry, summarySubtotal, summaryshippingCost, summaryTotalTax, summaryTotalCost}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendUrlWebButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendUrlWebButton')
    .send({args:{ pageAccessToken, recipientId, title, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle, url, webviewHeightRatio, messengerExtensions, fallbackUrl,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendPostbackButton', function() {
    this.timeout(5000);
    
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendPostbackButton')
    .send({args:{ pageAccessToken, recipientId, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle, title, payload,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendCallButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendCallButton')
    .send({args:{ pageAccessToken, recipientId, title, text, payload: '+380505735370',}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendShareButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendShareButton')
    .send({args:{ pageAccessToken, recipientId, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

/*it('/sendBuyButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendBuyButton')
    .send({args:{ pageAccessToken, recipientId, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle, title, payload, paymentSummaryCurrency, paymentSummaryPaymentType, paymentSummaryMerchantName, paymentSummaryRequestedUserInfo, paymentSummaryPriceList,}})
    .expect(200)
    .then((res) => {});
});*/

it('/sendAccountLinkButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAccountLinkButton')
    .send({args:{ pageAccessToken, recipientId, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle, url}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendAccountUnlinkButton', () => {
    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAccountUnlinkButton')
    .send({args:{ pageAccessToken, recipientId, elementTitle, elementItemUrl, elementImageUrl, elementSubtitle,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendAirlineItineraryTemplate', function() {
    this.timeout(5000);

    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAirlineItineraryTemplate')
    .send({args:{ pageAccessToken, recipientId, introMessage, locale, themeColor, pnrNumber, passengerInfo: JSON.stringify( [
      {
        "name": "Farbound Smith Jr",
        "ticket_number": "0741234567890",
        "passenger_id": "p001"
      },
      {
        "name": "Nick Jones",
        "ticket_number": "0741234567891",
        "passenger_id": "p002"
      }
    ]), flightInfo: JSON.stringify([
      {
        "connection_id": "c001",
        "segment_id": "s001",
        "flight_number": "KL9123",
        "aircraft_type": "Boeing 737",
        "departure_airport": {
          "airport_code": "SFO",
          "city": "San Francisco",
          "terminal": "T4",
          "gate": "G8"
        },
        "arrival_airport": {
          "airport_code": "SLC",
          "city": "Salt Lake City",
          "terminal": "T4",
          "gate": "G8"
        },
        "flight_schedule": {
          "departure_time": "2016-01-02T19:45",
          "arrival_time": "2016-01-02T21:20"
        },
        "travel_class": "business"
      },
      {
        "connection_id": "c002",
        "segment_id": "s002",
        "flight_number": "KL321",
        "aircraft_type": "Boeing 747-200",
        "travel_class": "business",
        "departure_airport": {
          "airport_code": "SLC",
          "city": "Salt Lake City",
          "terminal": "T1",
          "gate": "G33"
        },
        "arrival_airport": {
          "airport_code": "AMS",
          "city": "Amsterdam",
          "terminal": "T1",
          "gate": "G33"
        },
        "flight_schedule": {
          "departure_time": "2016-01-02T22:45",
          "arrival_time": "2016-01-03T17:20"
        }
      }
    ]), passengerSegmentInfo: JSON.stringify([
      {
        "segment_id": "s001",
        "passenger_id": "p001",
        "seat": "12A",
        "seat_type": "Business"
      },
      {
        "segment_id": "s001",
        "passenger_id": "p002",
        "seat": "12B",
        "seat_type": "Business"
      },
      {
        "segment_id": "s002",
        "passenger_id": "p001",
        "seat": "73A",
        "seat_type": "World Business",
        "product_info": [
          {
            "title": "Lounge",
            "value": "Complimentary lounge access"
          },
          {
            "title": "Baggage",
            "value": "1 extra bag 50lbs"
          }
        ]
      },
      {
        "segment_id": "s002",
        "passenger_id": "p002",
        "seat": "73B",
        "seat_type": "World Business",
        "product_info": [
          {
            "title": "Lounge",
            "value": "Complimentary lounge access"
          },
          {
            "title": "Baggage",
            "value": "1 extra bag 50lbs"
          }
        ]
      }
    ]), priceInfo: JSON.stringify([
      {
        "title": "Fuel surcharge",
        "amount": "1597",
        "currency": "USD"
      }
    ]), basePrice, tax, totalPrice, currency,}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendAirlineCheckinTemplate', function() {
    this.timeout(5000);

    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAirlineCheckinTemplate')
    .send({args:{ pageAccessToken, recipientId, introMessage, locale, themeColor, pnrNumber, flightInfo: JSON.stringify(
      [{
        "flight_number": "f001",
        "departure_airport": {
          "airport_code": "SFO",
          "city": "San Francisco",
          "terminal": "T4",
          "gate": "G8"
        },
        "arrival_airport": {
          "airport_code": "SEA",
          "city": "Seattle",
          "terminal": "T4",
          "gate": "G8"
        },
        "flight_schedule": {
          "boarding_time": "2016-01-05T15:05",
          "departure_time": "2016-01-05T15:45",
          "arrival_time": "2016-01-05T17:30"
        }
      }
    ]), checkinUrl,}})
    .expect(200)
    .then((res) => {});
});

it('/sendAirlineBoardingPassTemplate', function () {
    this.timeout(5000);

    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAirlineBoardingPassTemplate')
    .send({args:{ pageAccessToken, recipientId, introMessage, locale, themeColor, boardingPass: JSON.stringify([
      {
        "passenger_name": "SMITH\/NICOLAS",
        "pnr_number": "CG4X7U",
        "travel_class": "business",
        "seat": "74J",
        "auxiliary_fields": [
          {
            "label": "Terminal",
            "value": "T1"
          },
          {
            "label": "Departure",
            "value": "30OCT 19:05"
          }
        ],
        "secondary_fields": [
          {
            "label": "Boarding",
            "value": "18:30"
          },
          {
            "label": "Gate",
            "value": "D57"
          },
          {
            "label": "Seat",
            "value": "74J"
          },
          {
            "label": "Sec.Nr.",
            "value": "003"
          }
        ],
        "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
        "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
        "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
        "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
        "flight_info": {
          "flight_number": "KL0642",
          "departure_airport": {
            "airport_code": "JFK",
            "city": "New York",
            "terminal": "T1",
            "gate": "D57"
          },
          "arrival_airport": {
            "airport_code": "AMS",
            "city": "Amsterdam"
          },
          "flight_schedule": {
            "departure_time": "2016-01-02T19:05",
            "arrival_time": "2016-01-05T17:30"
          }
        }
      },
      {
        "passenger_name": "JONES\/FARBOUND",
        "pnr_number": "CG4X7U",
        "travel_class": "business",
        "seat": "74K",
        "auxiliary_fields": [
          {
            "label": "Terminal",
            "value": "T1"
          },
          {
            "label": "Departure",
            "value": "30OCT 19:05"
          }
        ],
        "secondary_fields": [
          {
            "label": "Boarding",
            "value": "18:30"
          },
          {
            "label": "Gate",
            "value": "D57"
          },
          {
            "label": "Seat",
            "value": "74K"
          },
          {
            "label": "Sec.Nr.",
            "value": "004"
          }
        ],
        "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
        "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
        "qr_code": "M1JONES\/FARBOUND  CG4X7U nawouehgawgnapwi3jfa0wfh",
        "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
        "flight_info": {
          "flight_number": "KL0642",
          "departure_airport": {
            "airport_code": "JFK",
            "city": "New York",
            "terminal": "T1",
            "gate": "D57"
          },
          "arrival_airport": {
            "airport_code": "AMS",
            "city": "Amsterdam"
          },
          "flight_schedule": {
            "departure_time": "2016-01-02T19:05",
            "arrival_time": "2016-01-05T17:30"
          }
        }
      }
    ]),}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

it('/sendAirlineFlightUpdateTemplate', function() {
    this.timeout(5000);

    return request(app)
    .post('/api/'+ PACKAGE_NAME +'/sendAirlineFlightUpdateTemplate')
    .send({args:{ pageAccessToken, recipientId, introMessage, updateType, locale, themeColor, pnrNumber, pnrNumber, updateFlightInfoFlightNumber, updateFlightInfoDepartureAirport: JSON.stringify({
        "airport_code": "SFO",
        "city": "San Francisco",
        "terminal": "T4",
        "gate": "G8"
  }), updateFlightInfoArrivalAirport: JSON.stringify({
        "airport_code": "AMS",
        "city": "Amsterdam",
        "terminal": "T4",
        "gate": "G8"
      }), updateFlightInfoFlightSchedule: JSON.stringify({
        "boarding_time": "2015-12-26T10:30",
        "departure_time": "2015-12-26T11:30",
        "arrival_time": "2015-12-27T07:30"
      })}})
    .expect(200)
    .then((res) => {
        assert.equal(res.body.callback, 'success');
    });
});

});