[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/FacebookMessenger/functions?utm_source=RapidAPIGitHub_FbMessengerFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# FacebookMessenger Package
* Domain: facebook.com
* Credentials: pageAccessToken

## How to get credentials

[Facebook Messenger API Quick Start](https://developers.facebook.com/docs/messenger-platform/quickstart)


## FacebookMessenger.sendTextMessage
Send Text Message

| Field          | Type       | Description
|----------------|------------|----------
| recipientId    | String     | ID of Recipient
| pageAccessToken| credentials| Your Page Token
| message        | String     | The message to be sent


## FacebookMessenger.subscribeAppToPage
Subscribe an app to get updates for a page.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com


## FacebookMessenger.validateWebhook
Test if your webhook works correctly and you're subscribed to a page.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| appId          | String     | Required: App ID obtained from developer.facebook.com
| pageId         | String     | Required: Page ID obtained from developer.facebook.com


## FacebookMessenger.sendAction
Set typing indicators or send read receipts using the Send API, to let users know you are processing their request.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID
| senderAction   | String     | `mark_seen`: Mark last message as read; `typing_on`: Turn typing indicators on; `typing_off`: Turn typing indicators off.


## FacebookMessenger.sendImage
You can send images by uploading them or sharing a URL using the Send API. Supported formats are jpg, png and gif.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID
| image          | File       | Image to send


## FacebookMessenger.getUserProfile
Returns a json string with the requested details about the user.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| userId         | String     | Required: User ID
| fields         | String     | Required: Comma separated fields string: `first_name`, `last_name`, `profile_pic`, `locale`, `timezone`, `gender`


## FacebookMessenger.setPersistentMenu
The Persistent Menu is a menu that is always available to the user. This menu should contain top-level actions that users can enact at any point. Having a persistent menu easily communicates the basic capabilities of your bot for first-time and returning users. The menu can be invoked by a user, by tapping on the 3-caret icon on the left of the composer.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| callToActions  | JSON       | Required: Array of menu_item object

menu_item object: 
```
{
  "type":"Value is web_url or postback, required",
  "title":"Button title, required",
  "url": "For web_url buttons, this URL is opened in a mobile browser when the button is tapped",
  "payload": "For postback buttons, this data will be sent back to you via webhook",
  "webview_height_ratio": "Height of the Webview. Valid values: compact, tall, full."
  "messenger_extensions": "Must be true if using Messenger Extensions."
},
```


## FacebookMessenger.deletePersistentMenu
Delete the Psersistent Menu.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com


## FacebookMessenger.setGetStartedButton
The Welcome Screen can display a Get Started button. When this button is tapped, we will trigger the postback received callback and deliver the person's page-scoped ID (PSID). You can then present a personalized message to greet the user or present buttons to prompt him or her to take an action.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| payload        | String     | This data will be sent back to you via webhook.


## FacebookMessenger.deleteGetStartedButton
Delete the Get Started button.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com


## FacebookMessenger.setGreetingText
You can set a greeting for new conversations. This can be used to communicate your bot's functionality. If the greeting text is not set, the page description will be shown in the welcome screen. You can personalize the text with the person's name.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| text           | String     | Required: Greeting text


## FacebookMessenger.deleteGreetingText
Delete the Greeting Text.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com


## FacebookMessenger.setWhitelist
Domain whitelisting is required to use Messenger Extensions.

| Field             | Type       | Description
|-------------------|------------|----------
| pageAccessToken   | credentials| Required: Page Access Token obtained from developer.facebook.com
| whitelistedDomains| JSON       | Required: A list of domains being used with URL Buttons and Messenger Extensions. All domains must be valid and use https. Up to 10 domains allowed.
| domainActionType  | String     | Operation when setting domain. Valid values: `add`, `remove`

whitelistedDomains format: 
```
["domain.com", "anotherdomain.com"]
```


## FacebookMessenger.setPaymentPrivacyUrl
The payment_privacy_url will appear in our payment dialogs and people will be able to view these terms.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| url            | String     | Required: Payment Privacy Url


## FacebookMessenger.setPaymentPublicKey
The payment_public_key is used to encrypt sensitive payment data sent to you.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| key            | String     | Required: Payment Public Key.


## FacebookMessenger.getPSID
In certain cases you need to retrieve the user page-scoped ID (PSID) during the linking flow. To help with this situation we are providing a PSID retrieval endpoint allowing you to fetch the user's PSID given a valid and unexpired account_linking_token.

| Field              | Type       | Description
|--------------------|------------|----------
| pageAccessToken    | credentials| Required: Page Access Token obtained from developer.facebook.com
| accountLinkingToken| String     | Required: Short-lived token passed by Messenger which you need to pass back as part of the redirect scheme. This token is only valid for 5 minutes, it is encrypted and unique per user.


## FacebookMessenger.unlinkPSID
In certain cases you need to unlink the user page-scoped ID (PSID) programmatically from your backend. To help with this situation we are providing a PSID unlinking endpoint allowing you to unlink the user's account given a valid PSID.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| PSID           | String     | Required: PSID.


## FacebookMessenger.sendQuickReplyButton
Quick Replies provide a new way to present buttons to the user. Quick Replies appear prominently above the composer, with the keyboard less prominent. When a quick reply is tapped, the message is sent in the conversation with developer-defined metadata in the callback. Also, the buttons are dismissed preventing the issue where users could tap on buttons attached to old messages in a conversation.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| message        | JSON       | Messgae Object.

message object:
```
"text": "Message text",
"attachment": {
	"type": "Type of attachment, may be image or template, required",
	"payload": "Payload of attachment, required"
},
"quick_replies": [
	"content_type": "text or location, required",
	"title": "Caption of button",
	"payload": "Custom data that will be sent back to you via webhook",
	"image_url": "URL of image for text quick replies"
]
```


## FacebookMessenger.sendShareLocationReplyButton
Method description

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| text           | String     | Text of message.


## FacebookMessenger.sendGenericTemplate
Use the Generic Template with the Send API to send a horizontal scrollable carousel of items, each composed of an image attachment, short description and buttons to request input from the user.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| elements       | JSON       | Required: Data for each bubble in message.

elements object: 
```
"title": "Bubble title, required",
"item_url": "URL that is opened when bubble is tapped",
"image_url": "Bubble image",
"subtitle": "Bubble subtitle",
"buttons": "Url|Postback|Call|Share|Buy button object (see send_TYPE_Button methods)."
```


## FacebookMessenger.sendButtonTemplate
Use the Button Template with the Send API to send a text and buttons attachment to request input from the user. The buttons can open a URL, or make a back-end call to your webhook.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| buttons        | JSON       | Array of button objects (see send_TYPE_Button methods).
| text           | String     | Text that appears in main body


## FacebookMessenger.sendReceiptTemplate
Use the Receipt Template with the Send API to send a order confirmation, with the transaction summary and description for each item.

| Field              | Type       | Description
|--------------------|------------|----------
| pageAccessToken    | credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId        | String     | Required: Recipient ID.
| recipientName      | String     | Required: Recipient's name.
| orderNumber        | String     | Required & unique: Order number.
| currency           | String     | Currency for order.
| paymentMethod      | String     | Required: Payment method details. This can be a custom string. ex: "Visa 1234".
| orderUrl           | String     | URL of order.
| timestamp          | String     | Timestamp of the order, in seconds.
| elements           | JSON       | Required: Items in order.
| addressStreet1     | String     | Required: Street address, line 1
| addressStreet2     | String     | Required: Street address, line 2
| addressCity        | String     | Required: City
| addressPostalCode  | String     | Required: Postal code
| addressState       | String     | Required: State abbreviation or Region/Province (international)
| addressCountry     | String     | Required: Two-letter country abbreviation
| summarySubtotal    | String     | Subtotal
| summaryshippingCost| String     | Cost of shipping
| summaryTotalTax    | String     | Total tax
| summaryTotalCost   | String     | Required: Total cost
| adjustments        | JSON       | Payment adjustments.

`element` object
```
"title": "Title of item, required",
"subtitle": "Subtitle of item",
"quantity": "Quantity of item",
"price": "Item price",
"currency": "Currency of price",
"image_url": "Image URL of item"
```

`adjustments` object
```
"name": "Name of adjustment",
"amount": "Adjustment amount"
```


## FacebookMessenger.sendUrlWebButton
The URL Button can be used to open a web page in the in-app browser. This button can be used with the Button and Generic Templates.

| Field              | Type       | Description
|--------------------|------------|----------
| pageAccessToken    | credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId        | String     | Required: Recipient ID.
| title              | String     | Required: Button title. 20 character limit.
| elementTitle       | String     | Element Title.
| elementItemUrl     | String     | Element Item Url.
| elementImageUrl    | String     | Element Image Url.
| elementSubtitle    | String     | Element Subtitle.
| url                | String     | Required: This URL is opened in a mobile browser when the button is tapped
| webviewHeightRatio | String     | Height of the Webview. Valid values: `compact`, `tall`, `full`.
| messengerExtensions| String     | Must be true if using Messenger Extensions.
| fallbackUrl        | String     | URL to use on clients that don't support Messenger Extensions. If this is not defined, the url will be used as the fallback.


## FacebookMessenger.sendPostbackButton
When a Postback Button is tapped, we will send a call to your webhook. This is useful when you want to send a person's action to your bot. This button can be used with the Button and Generic Templates.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.
| title          | String     | Required: Button title. 20 character limit.
| payload        | String     | Required: This data will be sent back to your webhook. 1000 character limit.


## FacebookMessenger.sendCallButton
The Call Button can be used to initiate a phone call. This button can be used with the Button and Generic Templates.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| title          | String     | Required: Button title. 20 character limit.
| text           | String     | Text of message
| payload        | String     | Required: Format must have '+' prefix followed by the country code, area code and local number. For example, `+16505551234`.


## FacebookMessenger.sendShareButton
The Share Button enables people to share message bubbles with their contacts using a native share dialog in Messenger.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.


## FacebookMessenger.sendBuyButton
(BETA) The Buy Button enables you to build a checkout experience in Messenger. This button opens a native checkout dialog in Messenger and enables people to use their information stored in Messenger.

| Field                          | Type       | Description
|--------------------------------|------------|----------
| pageAccessToken                | credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId                    | String     | Required: Recipient ID.
| elementTitle                   | String     | Element Title.
| elementItemUrl                 | String     | Element Item Url.
| elementImageUrl                | String     | Element Image Url.
| elementSubtitle                | String     | Element Subtitle.
| title                          | String     | Required: Title of Buy Button. Must be 'buy'.
| payload                        | String     | Required: Developer defined metadata about the purchase.
| paymentSummaryCurrency         | String     | Required: Currency for price.
| paymentSummaryPaymentType      | String     | Required: Must be `FIXED_AMOUNT` or `FLEXIBLE_AMOUNT`.
| paymentSummaryMerchantName     | String     | Required: Name of merchant.
| paymentSummaryRequestedUserInfo| JSON       | Required: Information requested from person that will render in the dialog. Valid values: `shipping_address`, `contact_name`, `contact_phone`, `contact_email`.
| paymentSummaryPriceList        | JSON       | Required: List of objects used to calculate total price. Each label is rendered as a line item in the checkout dialog.

`paymentSummaryRequestedUserInfo` syntax: 
```
[
	"shipping_address",
	"contact_name",
	"contact_phone",
	"contact_email"
]
```

`price_list` object
```
{
	"label": "Label for line item, required"
	"amount": "Amount of line item, required"
}
```

## FacebookMessenger.sendAccountLinkButton
The account linking authentication flow can be triggered by using a specific button type described below.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.
| url            | String     | Authentication callback URL. Must be using https protocol.


## FacebookMessenger.sendAccountUnlinkButton
Account unlinking can be triggered by using a specific type of button described below.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.


## FacebookMessenger.sendAirlineItineraryTemplate
Send a confirmation message that contains the itinerary and receipt.

| Field               | Type       | Description
|---------------------|------------|----------
| pageAccessToken     | credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId         | String     | Required: Recipient ID.
| introMessage        | String     | Required: Introduction message.
| locale              | String     | Required: Two-letter language region code.
| themeColor          | String     | Background color of the attachment
| pnrNumber           | String     | Required: Passenger name record number (Booking Number)
| passengerInfo       | JSON       | Required: Information about a passenger. Array of `passenger_info`
| flightInfo          | JSON       | Required: Information about a flight. Array of `flight_info`.
| passengerSegmentInfo| JSON       | Information about a passenger segment. Array of `passenger_segment_info`.
| priceInfo           | JSON       | Itemization of the total price. Array of `price_info`
| basePrice           | Number     | Base price amount
| tax                 | Number     | Tax amount
| totalPrice          | Number     | Total price for the booking
| currency            | String     | Required: Pricing currency

`passenger_info` object
```
{
	"passenger_id": "Passenger ID, must be unique within the itinerary",
	"ticket_number": "Ticket number",
	"name": "Full name of passenger, including "
}
```

`flight_info` object
```
{
	"connection_id": "Used to group segments of a connection together",
	"segment_id": "segment_id of passenger_segment_info object",
	"flight_number": "Flight number",
	"aircraft_type": "Aircraft type (e.g. Boing 787)",
	"departure_airport": "Departure airport, `airport` object",
	"arrival_airport": "Arrival airport, `airport` object"",
	"flight_schedule": "Schedule for the flight, `flight_schedule` object",
	"travel_class": "Travel class",
}
```

`passenger_segment_info` object
```
{
	"segment_id": "Used to identify a flight segment",
	"passenger_id": "passenger_id of passenger_info object"
	"seat": "Seat number for the passenger",
	"seat_type": "Seat type for the passenger (e.g. Economy comfort)",
	"product_info": "List of products the passenger purchased"
}
```

`airport` object
```
{
	"airport_code": "Airport code (e.g. SFO)",
	"city": "City name",
	"terminal": "Terminal number",
	"gate": "Gate number"
}
```

`flight_schedule` object
```
{
	"boarding_time": "Boarding time in departure airport timezone",
	"departure_time": "Departure time in departure airport timezone",
	"arrival_time": "Arrival time in arrival airport timezone",
}
```

`price_info` object
```
{
	"title": "Price info title",
	"amount": "Price amount",
	"currency": "Pricing currency"
}
```

`product_info` object
```
{
	"title": "Product title",
	"value": "Product description",
}
```

## Request example: 

```json
"pageAccessToken": "...",
"recipientId": "...",
"intro_message": "Here\'s your flight itinerary.",
"locale": "en_US",
"pnrNumber": "ABCDEF",
"passengerInfo": [
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
],
"flightInfo": [
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
],
"passengerSegmentInfo": [
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
],
"priceInfo": [
  {
    "title": "Fuel surcharge",
    "amount": "1597",
    "currency": "USD"
  }
],
"basePrice": "12206",
"tax": "200",
"totalPrice": "14003",
"currency": "USD"
}
```


## FacebookMessenger.sendAirlineCheckinTemplate
Send a check-in reminder message.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| introMessage   | String     | Required: Introduction message.
| locale         | String     | Required: Two-letter language region code.
| themeColor     | String     | Background color of the attachment
| pnrNumber      | JSON       | Required: Passenger name record number (Booking Number)
| flightInfo     | String     | Required: Information about a flight. Array of `flight_info` (See `sendAirlineItineraryTemplate` method)
| checkinUrl     | String     | Required: URL for passengers to check-in

## Request example

```json
"pageAccessToken": "...",
"recipientId": "...",
"introMessage": "Check-in is available now.",
"locale": "en_US",
"pnrNumber": "ABCDEF",
"flightInfo": [
  {
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
],
"checkin_url": "https:\/\/www.airline.com\/check-in"
}
```


## FacebookMessenger.sendAirlineBoardingPassTemplate
Send a message that contains boarding passes for one or more flights or one more passengers. Message bubbles will be grouped by flight information -- if the flight information matches, all passengers will be share the same bubble. Multiple bubbles are automatically sent for all boarding_pass elements with different values for flight_info. In the future, we may group all boarding passes into the same bubble.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Required: Recipient ID.
| introMessage   | String     | Required: Introduction message.
| locale         | String     | Required: Two-letter language region code.
| themeColor     | String     | Background color of the attachment
| boardingPass   | JSON       | Required: Boarding passes for passengers.

`boarding_pass` object
```
{
	"passenger_name": "Flight number",
	"pnr_number": "Passenger name record number (Booking Number)",
	"travel_class": "Travel class",	
	"seat": "Seat number for passenger",
	"auxiliary_fields": "Flexible information to display in the auxiliary section",
	"secondary_fields": "Flexible information to display in the secondary section",
	"logo_image_url": "URL for the logo image",
	"header_image_url": "URL for the header image",
	"header_text_field": "Text for the header field",
	"qr_code": "Aztec or QR code",
	"barcode_image_url": "URL of the barcode image",
	"above_bar_code_image_url": "URL of thin image above the barcode",
	"flight_info": "Information about the flight",
}
```

## Request example:
```json
{
	"pageAccessToken": "...",
	"recipientId": "...",
	"introMessage": "You are checked in.",
	"locale": "en_US",
	"boardingPass": [
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
	]
}
```


## FacebookMessenger.sendAirlineFlightUpdateTemplate
Send flight status update message.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| pageAccessToken                 | credentials| Required: Page Access Token obtained from developer.facebook.com
| recipientId                     | String     | Required: Recipient ID.
| introMessage                    | String     | Required: Introduction message.
| updateType                      | String     | Required: Type of update for this notification.
| locale                          | String     | Required: Two-letter language region code.
| themeColor                      | String     | Background color of the attachment
| pnrNumber                       | String     | Required: Passenger name record number (Booking Number).
| pnrNumber                       | String     | Required: Passenger name record number (Booking Number).
| updateFlightInfoFlightNumber    | String     | Required: Flight number
| updateFlightInfoDepartureAirport| JSON       | Required: Departure airport (airport object). See sendAirlineItineraryTemplate method.
| updateFlightInfoArrivalAirport  | JSON       | Required: Arrival airport (airport object). See sendAirlineItineraryTemplate method.
| updateFlightInfoFlightSchedule  | JSON       | Required: Schedule for the flight. flight_schedule object (airport object). See sendAirlineItineraryTemplate method.
