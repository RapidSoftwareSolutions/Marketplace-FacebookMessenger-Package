module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
    "package": "FacebookMessenger",
    "tagline": "FacebookMessenger API",
    "keywords": ["AI", "API", "bot", "chat", "chatbot", "marketing", "message", "messaging", "social"],
    "description": "Texting and so much more.",
    "image": "http://gtalogo.com/img/3437.png",
    "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-FacebookMessenger-Package",
    "accounts": {
        "domain": "facebook.com",
        "credentials": ["pageAccessToken"]
    },
    "events": [
        {
            name: "webhook",
            description: "Sends a notification every time selected events happen on a subscribed page",
            payload: {
                "object": "page",
                "entry": [
                    {
                        "id":"PAGE_ID",
                        "time":1458692752478,
                        "messaging":[
                            {
                                "sender":{
                                    "id":"USER_ID"
                                },
                                "recipient":{
                                    "id":"PAGE_ID"
                                }
                            }
                        ]
                    }
                ]
            },
            steps: [
                'Create a new Facebook App and Page or use existing ones. Navigate to the App Dashboard and under Products click "Add Product" and select "Webhooks."',
                'You will be navigated to the Webhooks section, there click on New Subscription and select Page.',
                'Set the callback URL to: __WEBHOOK_URL__',
                'Enter the Verify Token "rapid_verification_token" and select the events you would like to receive notifications for under Subscription Fields, then press "Verify and Save".',
                'In the Token Generation section, select your Page. A Page Access Token will be generated for you.',
                'In the Webhooks section, you can subscribe the webhook for a specific page.'
            ],
            'args': [
                {
                    name: 'page_id',
                    type: 'string',
                    info: 'Page ID',
                    required: true
                }
            ]
        }
    ],
    "blocks": [
        {
            name: "sendTextMessage",
            description: "Send Text Message",
            args: [
                { name: "pageAccessToken", type: "credentials", info: "Your Page Token", required: true, placeholder: "Very long string"},
                { name: "recipientId", type: "String", info: "ID of Recipient", required: true, placeholder: "#body.id"},
                { name: "message", type: "String", info: "The message to be sent", required: true, placeholder: "Hello, FB!"}
            ],
            callbacks: [
                { name: "success", info:"Message was sent", /*suggested:"response.sendMessage"*/ },
                { name: "error", info:"There was an error delivering the message", /*suggested:"response.sendMessage"*/ }
            ]
        },
        {
        "name": "subscribeAppToPage",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Subscribe an app to get updates for a page."
    }, {
        "name": "validateWebhook",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "appId",
            "type": "String",
            "info": "App ID obtained from developer.facebook.com",            
            required: true
        }, {
            "name": "pageId",
            "type": "String",
            "info": "Page ID obtained from developer.facebook.com",            
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Test if your webhook works correctly and you're subscribed to a page."
    }, {
        "name": "sendAction",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID",            
            required: true
        }, {
            "name": "senderAction",
            "type": "String",
            "info": "`mark_seen`: Mark last message as read; `typing_on`: Turn typing indicators on; `typing_off`: Turn typing indicators off.",            
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Set typing indicators or send read receipts using the Send API, to let users know you are processing their request."
    }, {
        "name": "sendImage",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID",            
            required: true
        }, {
            "name": "image",
            "type": "File",
            "info": "Image to send",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "You can send images by uploading them or sharing a URL using the Send API. Supported formats are jpg, png and gif."
    }, {
        "name": "getUserProfile",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "userId",
            "type": "String",
            "info": "User ID",            
            required: true
        }, {
            "name": "fields",
            "type": "String",
            "info": "Comma separated fields string: `first_name`, `last_name`, `profile_pic`, `locale`, `timezone`, `gender`",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Returns a json string with the requested details about the user."
    }, {
        "name": "setPersistentMenu",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "callToActions",
            "type": "JSON",
            "info": "Array of menu_item object",            
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The Persistent Menu is a menu that is always available to the user. This menu should contain top-level actions that users can enact at any point. Having a persistent menu easily communicates the basic capabilities of your bot for first-time and returning users. The menu can be invoked by a user, by tapping on the 3-caret icon on the left of the composer."
    }, {
        "name": "deletePersistentMenu",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Delete the Psersistent Menu."
    }, {
        "name": "setGetStartedButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "payload",
            "type": "String",
            "info": "This data will be sent back to you via webhook.",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The Welcome Screen can display a Get Started button. When this button is tapped, we will trigger the postback received callback and deliver the person's page-scoped ID (PSID). You can then present a personalized message to greet the user or present buttons to prompt him or her to take an action."
    }, {
        "name": "deleteGetStartedButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Delete the Get Started button."
    }, {
        "name": "setGreetingText",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "text",
            "type": "String",
            "info": "Greeting text",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "You can set a greeting for new conversations. This can be used to communicate your bot's functionality. If the greeting text is not set, the page description will be shown in the welcome screen. You can personalize the text with the person's name."
    }, {
        "name": "deleteGreetingText",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Delete the Greeting Text."
    }, {
        "name": "setWhitelist",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "whitelistedDomains",
            "type": "JSON",
            "info": "A list of domains being used with URL Buttons and Messenger Extensions. All domains must be valid and use https. Up to 10 domains allowed.",
            required: true
        }, {
            "name": "domainActionType",
            "type": "String",
            "info": "Operation when setting domain. Valid values: `add`, `remove`",
            required: false
        },],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Domain whitelisting is required to use Messenger Extensions."
    }/*, {
        "name": "setPaymentPrivacyUrl",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "url",
            "type": "String",
            "info": "Payment Privacy Url",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The payment_privacy_url will appear in our payment dialogs and people will be able to view these terms."
    }, {
        "name": "setPaymentPublicKey",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "key",
            "type": "String",
            "info": "Payment Public Key.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The payment_public_key is used to encrypt sensitive payment data sent to you."
    }, {
        "name": "getPSID",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "accountLinkingToken",
            "type": "String",
            "info": "Short-lived token passed by Messenger which you need to pass back as part of the redirect scheme. This token is only valid for 5 minutes, it is encrypted and unique per user.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "In certain cases you need to retrieve the user page-scoped ID (PSID) during the linking flow. To help with this situation we are providing a PSID retrieval endpoint allowing you to fetch the user's PSID given a valid and unexpired account_linking_token."
    }, {
        "name": "unlinkPSID",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "PSID",
            "type": "String",
            "info": "PSID.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "In certain cases you need to unlink the user page-scoped ID (PSID) programmatically from your backend. To help with this situation we are providing a PSID unlinking endpoint allowing you to unlink the user's account given a valid PSID."
    }*/, {
        "name": "sendQuickReplyButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "message",
            "type": "JSON",
            "info": "Messgae Object.",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Quick Replies provide a new way to present buttons to the user. Quick Replies appear prominently above the composer, with the keyboard less prominent. When a quick reply is tapped, the message is sent in the conversation with developer-defined metadata in the callback. Also, the buttons are dismissed preventing the issue where users could tap on buttons attached to old messages in a conversation."
    }, {
        "name": "sendShareLocationReplyButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "text",
            "type": "String",
            "info": "Text of message.",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": ""
    }, {
        "name": "sendGenericTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elements",
            "type": "JSON",
            "info": "Data for each bubble in message.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Use the Generic Template with the Send API to send a horizontal scrollable carousel of items, each composed of an image attachment, short description and buttons to request input from the user."
    }, {
        "name": "sendButtonTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "buttons",
            "type": "JSON",
            "info": "Array of button objects.",
            required: false
        }, {
            "name": "text",
            "type": "String",
            "info": "Text that appears in main body",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Use the Button Template with the Send API to send a text and buttons attachment to request input from the user. The buttons can open a URL, or make a back-end call to your webhook."
    }, {
        "name": "sendReceiptTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "recipientName",
            "type": "String",
            "info": "Recipient's name.",
            required: true
        }, {
            "name": "orderNumber",
            "type": "String",
            "info": "Required & unique: Order number.",
            required: false
        }, {
            "name": "currency",
            "type": "String",
            "info": "Currency for order.",
            required: false
        }, {
            "name": "paymentMethod",
            "type": "String",
            "info": 'Required: Payment method details. This can be a custom string. ex: "Visa 1234".'
        }, {
            "name": "orderUrl",
            "type": "String",
            "info": "URL of order.",
            required: false
        }, {
            "name": "timestamp",
            "type": "String",
            "info": "Timestamp of the order, in seconds.",
            required: false
        }, {
            "name": "elements",
            "type": "JSON",
            "info": "Items in order.",
            required: true
        }, {
            "name": "addressStreet1",
            "type": "String",
            "info": "Street address, line 1",
            required: true
        }, {
            "name": "addressStreet2",
            "type": "String",
            "info": "Street address, line 2",
            required: true
        }, {
            "name": "addressCity",
            "type": "String",
            "info": "City",
            required: true
        }, {
            "name": "addressPostalCode",
            "type": "String",
            "info": "Postal code",
            required: true
        }, {
            "name": "addressState",
            "type": "String",
            "info": "State abbreviation or Region/Province (international)",
            required: true
        }, {
            "name": "addressCountry",
            "type": "String",
            "info": "Two-letter country abbreviation",
            required: true
        }, {
            "name": "summarySubtotal",
            "type": "String",
            "info": "Subtotal",
            required: false
        }, {
            "name": "summaryshippingCost",
            "type": "String",
            "info": "Cost of shipping",
            required: false
        }, {
            "name": "summaryTotalTax",
            "type": "String",
            "info": "Total tax",
            required: false
        }, {
            "name": "summaryTotalCost",
            "type": "String",
            "info": "Total cost",
            required: true
        }, {
            "name": "adjustments",
            "type": "JSON",
            "info": "Payment adjustments.",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Use the Receipt Template with the Send API to send a order confirmation, with the transaction summary and description for each item."
    }, {
        "name": "sendUrlWebButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "title",
            "type": "String",
            "info": "Button title. 20 character limit.",            
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }, {
            "name": "url",
            "type": "String",
            "info": "This URL is opened in a mobile browser when the button is tapped",
            required: true
        }, {
            "name": "webviewHeightRatio",
            "type": "String",
            "info": "Height of the Webview. Valid values: `compact`, `tall`, `full`.",
            required: false
        }, {
            "name": "messengerExtensions",
            "type": "String", // Boolean
            "info": "Must be true if using Messenger Extensions.",
            required: false
        }, {
            "name": "fallbackUrl",
            "type": "String",
            "info": "URL to use on clients that don't support Messenger Extensions. If this is not defined, the url will be used as the fallback.",
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The URL Button can be used to open a web page in the in-app browser. This button can be used with the Button and Generic Templates."
    }, {
        "name": "sendPostbackButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }, {
            "name": "title",
            "type": "String",
            "info": "Button title. 20 character limit.",            
            required: true
        }, {
            "name": "payload",
            "type": "String",
            "info": "This data will be sent back to your webhook. 1000 character limit.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "When a Postback Button is tapped, we will send a call to your webhook. This is useful when you want to send a person's action to your bot. This button can be used with the Button and Generic Templates."
    }, {
        "name": "sendCallButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "title",
            "type": "String",
            "info": "Button title. 20 character limit.",            
            required: true
        }, {
            "name": "text",
            "type": "String",
            "info": "Text of message",            
            required: false
        }, {
            "name": "payload",
            "type": "String",
            "info": "Format must have '+' prefix followed by the country code, area code and local number. For example, `+16505551234`.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The Call Button can be used to initiate a phone call. This button can be used with the Button and Generic Templates."
    }, {
        "name": "sendShareButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The Share Button enables people to share message bubbles with their contacts using a native share dialog in Messenger."
    }, /*{
        "name": "sendBuyButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }, {
            "name": "title",
            "type": "String",
            "info": "Title of Buy Button. Must be 'buy'." 
            required: true
        }, {
            "name": "payload",
            "type": "String",
            "info": "Developer defined metadata about the purchase." 
            required: true
        }, {
            "name": "paymentSummaryCurrency",
            "type": "String",
            "info": "Currency for price." 
            required: true
        }, {
            "name": "paymentSummaryPaymentType",
            "type": "String",
            "info": "Must be `FIXED_AMOUNT` or `FLEXIBLE_AMOUNT`." 
            required: true
        }, {
            "name": "paymentSummaryMerchantName",
            "type": "String",
            "info": "Name of merchant." 
            required: true
        }, {
            "name": "paymentSummaryRequestedUserInfo",
            "type": "JSON",
            "info": "Information requested from person that will render in the dialog. Valid values: `shipping_address`, `contact_name`, `contact_phone`, `contact_email`." 
            required: true
        }, {
            "name": "paymentSummaryPriceList",
            "type": "JSON",
            "info": "List of objects used to calculate total price. Each label is rendered as a line item in the checkout dialog." 
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "(BETA) The Buy Button enables you to build a checkout experience in Messenger. This button opens a native checkout dialog in Messenger and enables people to use their information stored in Messenger."
    },*/ {
        "name": "sendAccountLinkButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }, {
            "name": "url",
            "type": "String",
            "info": "Authentication callback URL. Must be using https protocol.",   
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "The account linking authentication flow can be triggered by using a specific button type described below."
    }, {
        "name": "sendAccountUnlinkButton",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title.",            
            required: false
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url.",            
            required: false
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url.",            
            required: false
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle.",            
            required: false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Account unlinking can be triggered by using a specific type of button described below."
    }, {
        "name": "sendAirlineItineraryTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Introduction message.",
            required: true
        }, {
            "name": "locale",
            "type": "String",
            "info": "Two-letter language region code.",
            required: true
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment",
            required: false
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Required: Passenger name record number (Booking Number).",
            required: true
        }, {
            "name": "passengerInfo",
            "type": "JSON",
            "info": "Passenger name record number (Booking Number). Array of `passenger_info`",
            required: true
        }, {
            "name": "flightInfo",
            "type": "String",
            "info": "Information about a flight. Array of `flight_info`",
            required: true
        }, {
            "name": "passengerSegmentInfo",
            "type": "JSON",
            "info": "Information about a passenger. Array of passenger_segment_info.",
            required: false
        }, {
            "name": "priceInfo",
            "type": "JSON",
            "info": "Itemization of the total price",
            required: false
        }, {
            "name": "basePrice",
            "type": "Number",
            "info": "Itemization of the total price",
            required: false
        }, {
            "name": "tax",
            "type": "Number",
            "info": "Tax amount",
            required: false
        }, {
            "name": "totalPrice",
            "type": "Number",
            "info": "Total price for the booking",
            required: false
        }, {
            "name": "currency",
            "type": "String",
            "info": "Pricing currency",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Send a confirmation message that contains the itinerary and receipt."
    }, {
        "name": "sendAirlineCheckinTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Introduction message.",
            required: true
        }, {
            "name": "locale",
            "type": "String",
            "info": "Two-letter language region code.",
            required: true
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment",
            required: false
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Required: Passenger name record number (Booking Number).",
            required: true
        }, {
            "name": "flightInfo",
            "type": "JSON",
            "info": "Information about a flight. Array of `passenger_segment_info`",
            required: true
        }, {
            "name": "checkinUrl",
            "type": "String",
            "info": "URL for passengers to check-in",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Send a check-in reminder message."
    }, {
        "name": "sendAirlineBoardingPassTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Introduction message.",
            required: true
        }, {
            "name": "locale",
            "type": "String",
            "info": "Two-letter language region code.",
            required: true
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment",
            required: false
        }, {
            "name": "boardingPass",
            "type": "JSON",
            "info": "Boarding passes for passengers.",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Send a message that contains boarding passes for one or more flights or one more passengers. Message bubbles will be grouped by flight information -- if the flight information matches, all passengers will be share the same bubble. Multiple bubbles are automatically sent for all boarding_pass elements with different values for flight_info. In the future, we may group all boarding passes into the same bubble."
    }, {
        "name": "sendAirlineFlightUpdateTemplate",
        "args": [{
            "name": "pageAccessToken",
            "type": "credentials",
            "info": "Page Access Token obtained from developer.facebook.com",
            required: true
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Recipient ID.",
            required: true
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Introduction message.",
            required: true
        }, {
            "name": "updateType",
            "type": "String",
            "info": "Type of update for this notification.",
            required: true
        }, {
            "name": "locale",
            "type": "String",
            "info": "Two-letter language region code.",
            required: true
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment",
            required: false
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Passenger name record number (Booking Number).",
            required: true
        }, {
            "name": "updateFlightInfoFlightNumber",
            "type": "String",
            "info": "Flight number",
            required: true
        }, {
            "name": "updateFlightInfoDepartureAirport",
            "type": "JSON",
            "info": "Departure airport (airport object)",
            required: true
        }, {
            "name": "updateFlightInfoArrivalAirport",
            "type": "JSON",
            "info": "Arrival airport",
            required: true
        }, {
            "name": "updateFlightInfoFlightSchedule",
            "type": "JSON",
            "info": "Schedule for the flight. flight_schedule object",
            required: true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }],
        "description": "Send flight status update message."
    },]
})}
