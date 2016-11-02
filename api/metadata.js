module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
    "package": "FacebookMessenger",
    "tagline": "FacebookMessenger API",
    "description": "Texting and so much more.",
    "image": "http://gtalogo.com/img/3437.png",
    "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-FacebookMessenger-Package",
    "accounts": {
        "domain": "facebook.com",
        "credentials": ["pageAccessToken"]
    },
    "blocks": [
        {
            name: "sendTextMessage",
            description: "Send Text Message",
            args: [
                { name: "recipientId", type: "String", info: "ID of Recipient", placeholder: "#body.id" },
                { name: "pageAccessToken", type: "credentials", info: "Your Page Token", placeholder: "Very long string" },
                { name: "message", type: "String", info: "The message to be sent", placeholder: "Hello, FB!" }
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "appId",
            "type": "String",
            "info": "Required: App ID obtained from developer.facebook.com"            
        }, {
            "name": "pageId",
            "type": "String",
            "info": "Required: Page ID obtained from developer.facebook.com"            
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID"            
        }, {
            "name": "senderAction",
            "type": "String",
            "info": "`mark_seen`: Mark last message as read; `typing_on`: Turn typing indicators on; `typing_off`: Turn typing indicators off."            
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID"            
        }, {
            "name": "image",
            "type": "String",
            "info": "URL of image"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "userId",
            "type": "String",
            "info": "Required: User ID"            
        }, {
            "name": "fields",
            "type": "String",
            "info": "Required: Comma separated fields string: `first_name`, `last_name`, `profile_pic`, `locale`, `timezone`, `gender`"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "callToActions",
            "type": "JSON",
            "info": "Required: Array of menu_item object"            
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "payload",
            "type": "String",
            "info": "This data will be sent back to you via webhook."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "text",
            "type": "String",
            "info": "Required: Greeting text"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "whitelistedDomains",
            "type": "JSON",
            "info": "Required: A list of domains being used with URL Buttons and Messenger Extensions. All domains must be valid and use https. Up to 10 domains allowed."
        }, {
            "name": "domainActionType",
            "type": "String",
            "info": "Operation when setting domain. Valid values: `add`, `remove`"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "url",
            "type": "String",
            "info": "Required: Payment Privacy Url"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "key",
            "type": "String",
            "info": "Required: Payment Public Key."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "accountLinkingToken",
            "type": "String",
            "info": "Required: Short-lived token passed by Messenger which you need to pass back as part of the redirect scheme. This token is only valid for 5 minutes, it is encrypted and unique per user."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "PSID",
            "type": "String",
            "info": "Required: PSID."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "message",
            "type": "JSON",
            "info": "Messgae Object."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "text",
            "type": "String",
            "info": "Text of message."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elements",
            "type": "JSON",
            "info": "Required: Data for each bubble in message."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "buttons",
            "type": "JSON",
            "info": "Array of button objects."
        }, {
            "name": "text",
            "type": "String",
            "info": "Text that appears in main body"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "recipientName",
            "type": "String",
            "info": "Required: Recipient's name."
        }, {
            "name": "orderNumber",
            "type": "String",
            "info": "Required & unique: Order number."
        }, {
            "name": "currency",
            "type": "String",
            "info": "Currency for order."
        }, {
            "name": "paymentMethod",
            "type": "String",
            "info": 'Required: Payment method details. This can be a custom string. ex: "Visa 1234".'
        }, {
            "name": "orderUrl",
            "type": "String",
            "info": "URL of order."
        }, {
            "name": "timestamp",
            "type": "String",
            "info": "Timestamp of the order, in seconds."
        }, {
            "name": "elements",
            "type": "JSON",
            "info": "Required: Items in order."
        }, {
            "name": "addressStreet1",
            "type": "String",
            "info": "Required: Street address, line 1"
        }, {
            "name": "addressStreet2",
            "type": "String",
            "info": "Required: Street address, line 2"
        }, {
            "name": "addressCity",
            "type": "String",
            "info": "Required: City"
        }, {
            "name": "addressPostalCode",
            "type": "String",
            "info": "Required: Postal code"
        }, {
            "name": "addressState",
            "type": "String",
            "info": "Required: State abbreviation or Region/Province (international)"
        }, {
            "name": "addressCountry",
            "type": "String",
            "info": "Required: Two-letter country abbreviation"
        }, {
            "name": "summarySubtotal",
            "type": "String",
            "info": "Subtotal"
        }, {
            "name": "summaryshippingCost",
            "type": "String",
            "info": "Cost of shipping"
        }, {
            "name": "summaryTotalTax",
            "type": "String",
            "info": "Total tax"
        }, {
            "name": "summaryTotalCost",
            "type": "String",
            "info": "Required: Total cost"
        }, {
            "name": "adjustments",
            "type": "JSON",
            "info": "Payment adjustments."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "title",
            "type": "String",
            "info": "Required: Button title. 20 character limit."            
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
        }, {
            "name": "url",
            "type": "String",
            "info": "Required: This URL is opened in a mobile browser when the button is tapped"
        }, {
            "name": "webviewHeightRatio",
            "type": "String",
            "info": "Height of the Webview. Valid values: `compact`, `tall`, `full`."
        }, {
            "name": "messengerExtensions",
            "type": "String", // Boolean
            "info": "Must be true if using Messenger Extensions."
        }, {
            "name": "fallbackUrl",
            "type": "String",
            "info": "URL to use on clients that don't support Messenger Extensions. If this is not defined, the url will be used as the fallback."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
        }, {
            "name": "title",
            "type": "String",
            "info": "Required: Button title. 20 character limit."            
        }, {
            "name": "payload",
            "type": "String",
            "info": "Required: This data will be sent back to your webhook. 1000 character limit."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "title",
            "type": "String",
            "info": "Required: Button title. 20 character limit."            
        }, {
            "name": "text",
            "type": "String",
            "info": "Text of message"            
        }, {
            "name": "payload",
            "type": "String",
            "info": "Required: Format must have '+' prefix followed by the country code, area code and local number. For example, `+16505551234`."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
        }, {
            "name": "title",
            "type": "String",
            "info": "Required: Title of Buy Button. Must be 'buy'."  
        }, {
            "name": "payload",
            "type": "String",
            "info": "Required: Developer defined metadata about the purchase."  
        }, {
            "name": "paymentSummaryCurrency",
            "type": "String",
            "info": "Required: Currency for price."  
        }, {
            "name": "paymentSummaryPaymentType",
            "type": "String",
            "info": "Required: Must be `FIXED_AMOUNT` or `FLEXIBLE_AMOUNT`."  
        }, {
            "name": "paymentSummaryMerchantName",
            "type": "String",
            "info": "Required: Name of merchant."  
        }, {
            "name": "paymentSummaryRequestedUserInfo",
            "type": "JSON",
            "info": "Required: Information requested from person that will render in the dialog. Valid values: `shipping_address`, `contact_name`, `contact_phone`, `contact_email`."  
        }, {
            "name": "paymentSummaryPriceList",
            "type": "JSON",
            "info": "Required: List of objects used to calculate total price. Each label is rendered as a line item in the checkout dialog."  
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
        }, {
            "name": "url",
            "type": "String",
            "info": "Authentication callback URL. Must be using https protocol."   
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "elementTitle",
            "type": "String",
            "info": "Element Title."            
        }, {
            "name": "elementItemUrl",
            "type": "String",
            "info": "Element Item Url."            
        }, {
            "name": "elementImageUrl",
            "type": "String",
            "info": "Element Image Url."            
        }, {
            "name": "elementSubtitle",
            "type": "String",
            "info": "Element Subtitle."            
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Required: Introduction message."
        }, {
            "name": "locale",
            "type": "String",
            "info": "Required: Two-letter language region code."
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment"
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Required: Required: Passenger name record number (Booking Number)."
        }, {
            "name": "passengerInfo",
            "type": "JSON",
            "info": "Required: Passenger name record number (Booking Number). Array of `passenger_info`"
        }, {
            "name": "flightInfo",
            "type": "String",
            "info": "Required: Information about a flight. Array of `flight_info`"
        }, {
            "name": "passengerSegmentInfo",
            "type": "JSON",
            "info": "Information about a passenger. Array of passenger_segment_info."
        }, {
            "name": "priceInfo",
            "type": "JSON",
            "info": "Itemization of the total price"
        }, {
            "name": "basePrice",
            "type": "Number",
            "info": "Itemization of the total price"
        }, {
            "name": "tax",
            "type": "Number",
            "info": "Tax amount"
        }, {
            "name": "totalPrice",
            "type": "Number",
            "info": "Total price for the booking"
        }, {
            "name": "currency",
            "type": "String",
            "info": "Required: Pricing currency"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Required: Introduction message."
        }, {
            "name": "locale",
            "type": "String",
            "info": "Required: Two-letter language region code."
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment"
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Required: Required: Passenger name record number (Booking Number)."
        }, {
            "name": "flightInfo",
            "type": "JSON",
            "info": "Required: Information about a flight. Array of `passenger_segment_info`"
        }, {
            "name": "checkinUrl",
            "type": "String",
            "info": "Required: URL for passengers to check-in"
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Required: Introduction message."
        }, {
            "name": "locale",
            "type": "String",
            "info": "Required: Two-letter language region code."
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment"
        }, {
            "name": "boardingPass",
            "type": "JSON",
            "info": "Required: Boarding passes for passengers."
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
            "info": "Required: Page Access Token obtained from developer.facebook.com"
        }, {
            "name": "recipientId",
            "type": "String",
            "info": "Required: Recipient ID."
        }, {
            "name": "introMessage",
            "type": "String",
            "info": "Required: Introduction message."
        }, {
            "name": "updateType",
            "type": "String",
            "info": "Required: Type of update for this notification."
        }, {
            "name": "locale",
            "type": "String",
            "info": "Required: Two-letter language region code."
        }, {
            "name": "themeColor",
            "type": "String",
            "info": "Background color of the attachment"
        }, {
            "name": "pnrNumber",
            "type": "String",
            "info": "Required: Passenger name record number (Booking Number)."
        }, {
            "name": "updateFlightInfoFlightNumber",
            "type": "String",
            "info": "Required: Flight number"
        }, {
            "name": "updateFlightInfoDepartureAirport",
            "type": "JSON",
            "info": "Required: Departure airport (airport object)"
        }, {
            "name": "updateFlightInfoArrivalAirport",
            "type": "JSON",
            "info": "Required: Arrival airport"
        }, {
            "name": "updateFlightInfoFlightSchedule",
            "type": "JSON",
            "info": "Required: Schedule for the flight. flight_schedule object"
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