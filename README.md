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
| pageAccessToken| credentials| Your Page Token
| recipientId    | String     | ID of Recipient
| message        | String     | The message to be sent

## FacebookMessenger.subscribeAppToPage
Subscribe an app to get updates for a page.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com

## FacebookMessenger.validateWebhook
Test if your webhook works correctly and you're subscribed to a page.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| appId          | String     | App ID obtained from developer.facebook.com
| pageId         | String     | Page ID obtained from developer.facebook.com

## FacebookMessenger.sendAction
Set typing indicators or send read receipts using the Send API, to let users know you are processing their request.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID
| senderAction   | Select     | `mark_seen`: Mark last message as read; `typing_on`: Turn typing indicators on; `typing_off`: Turn typing indicators off.

## FacebookMessenger.sendImage
You can send images by uploading them or sharing a URL using the Send API. Supported formats are jpg, png and gif.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID
| image          | File       | Image to send

## FacebookMessenger.getUserProfile
Returns a json string with the requested details about the user.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| userId         | String     | User ID
| fields         | List       | Comma separated fields string: `first_name`, `last_name`, `profile_pic`, `locale`, `timezone`, `gender`

## FacebookMessenger.setPersistentMenu
The Persistent Menu is a menu that is always available to the user. This menu should contain top-level actions that users can enact at any point. Having a persistent menu easily communicates the basic capabilities of your bot for first-time and returning users. The menu can be invoked by a user, by tapping on the 3-caret icon on the left of the composer.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| callToActions  | JSON       | Array of menu_item object

## FacebookMessenger.deletePersistentMenu
Delete the Psersistent Menu.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com

## FacebookMessenger.setGetStartedButton
The Welcome Screen can display a Get Started button. When this button is tapped, we will trigger the postback received callback and deliver the person's page-scoped ID (PSID). You can then present a personalized message to greet the user or present buttons to prompt him or her to take an action.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| payload        | String     | This data will be sent back to you via webhook.

## FacebookMessenger.deleteGetStartedButton
Delete the Get Started button.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com

## FacebookMessenger.setGreetingText
You can set a greeting for new conversations. This can be used to communicate your bot's functionality. If the greeting text is not set, the page description will be shown in the welcome screen. You can personalize the text with the person's name.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| text           | String     | Greeting text

## FacebookMessenger.deleteGreetingText
Delete the Greeting Text.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com

## FacebookMessenger.setWhitelist
Domain whitelisting is required to use Messenger Extensions.

| Field             | Type       | Description
|-------------------|------------|----------
| pageAccessToken   | credentials| Page Access Token obtained from developer.facebook.com
| whitelistedDomains| List       | A list of domains being used with URL Buttons and Messenger Extensions. All domains must be valid and use https. Up to 10 domains allowed.
| domainActionType  | String     | Operation when setting domain. Valid values: `add`, `remove`

## FacebookMessenger.sendQuickReplyButton
Quick Replies provide a new way to present buttons to the user. Quick Replies appear prominently above the composer, with the keyboard less prominent. When a quick reply is tapped, the message is sent in the conversation with developer-defined metadata in the callback. Also, the buttons are dismissed preventing the issue where users could tap on buttons attached to old messages in a conversation.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| message        | JSON       | Messgae Object.

## FacebookMessenger.sendShareLocationReplyButton
Method description

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| text           | String     | Text of message.

## FacebookMessenger.sendGenericTemplate
Use the Generic Template with the Send API to send a horizontal scrollable carousel of items, each composed of an image attachment, short description and buttons to request input from the user.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| elements       | JSON       | Data for each bubble in message.

## FacebookMessenger.sendButtonTemplate
Use the Button Template with the Send API to send a text and buttons attachment to request input from the user. The buttons can open a URL, or make a back-end call to your webhook.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| buttons        | JSON       | Array of button objects.
| text           | String     | Text that appears in main body

## FacebookMessenger.sendReceiptTemplate
Use the Receipt Template with the Send API to send a order confirmation, with the transaction summary and description for each item.

| Field              | Type       | Description
|--------------------|------------|----------
| pageAccessToken    | credentials| Page Access Token obtained from developer.facebook.com
| recipientId        | String     | Recipient ID.
| recipientName      | String     | Recipient's name.
| orderNumber        | String     | Required & unique: Order number.
| currency           | String     | Currency for order.
| paymentMethod      | String     | Required: Payment method details. This can be a custom string. ex: "Visa 1234".
| orderUrl           | String     | URL of order.
| timestamp          | String     | Timestamp of the order, in seconds.
| elements           | JSON       | Items in order.
| addressStreet1     | String     | Street address, line 1
| addressStreet2     | String     | Street address, line 2
| addressCity        | String     | City
| addressPostalCode  | String     | Postal code
| addressState       | String     | State abbreviation or Region/Province (international)
| addressCountry     | String     | Two-letter country abbreviation
| summarySubtotal    | String     | Subtotal
| summaryshippingCost| String     | Cost of shipping
| summaryTotalTax    | String     | Total tax
| summaryTotalCost   | String     | Total cost
| adjustments        | JSON       | Payment adjustments.

## FacebookMessenger.sendUrlWebButton
The URL Button can be used to open a web page in the in-app browser. This button can be used with the Button and Generic Templates.

| Field              | Type       | Description
|--------------------|------------|----------
| pageAccessToken    | credentials| Page Access Token obtained from developer.facebook.com
| recipientId        | String     | Recipient ID.
| title              | String     | Button title. 20 character limit.
| elementTitle       | String     | Element Title.
| elementItemUrl     | String     | Element Item Url.
| elementImageUrl    | String     | Element Image Url.
| elementSubtitle    | String     | Element Subtitle.
| url                | String     | This URL is opened in a mobile browser when the button is tapped
| webviewHeightRatio | Select     | Height of the Webview. Valid values: `compact`, `tall`, `full`.
| messengerExtensions| String     | Must be true if using Messenger Extensions.
| fallbackUrl        | String     | URL to use on clients that don't support Messenger Extensions. If this is not defined, the url will be used as the fallback.

## FacebookMessenger.sendPostbackButton
When a Postback Button is tapped, we will send a call to your webhook. This is useful when you want to send a person's action to your bot. This button can be used with the Button and Generic Templates.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.
| title          | String     | Button title. 20 character limit.
| payload        | String     | This data will be sent back to your webhook. 1000 character limit.

## FacebookMessenger.sendCallButton
The Call Button can be used to initiate a phone call. This button can be used with the Button and Generic Templates.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| title          | String     | Button title. 20 character limit.
| text           | String     | Text of message
| payload        | String     | Format must have '+' prefix followed by the country code, area code and local number. For example, `+16505551234`.

## FacebookMessenger.sendShareButton
The Share Button enables people to share message bubbles with their contacts using a native share dialog in Messenger.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.

## FacebookMessenger.sendAccountLinkButton
The account linking authentication flow can be triggered by using a specific button type described below.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.
| url            | String     | Authentication callback URL. Must be using https protocol.

## FacebookMessenger.sendAccountUnlinkButton
Account unlinking can be triggered by using a specific type of button described below.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| elementTitle   | String     | Element Title.
| elementItemUrl | String     | Element Item Url.
| elementImageUrl| String     | Element Image Url.
| elementSubtitle| String     | Element Subtitle.

## FacebookMessenger.sendAirlineItineraryTemplate
Send a confirmation message that contains the itinerary and receipt.

| Field               | Type       | Description
|---------------------|------------|----------
| pageAccessToken     | credentials| Page Access Token obtained from developer.facebook.com
| recipientId         | String     | Recipient ID.
| introMessage        | String     | Introduction message.
| locale              | String     | Two-letter language region code.
| themeColor          | String     | Background color of the attachment
| pnrNumber           | String     | Required: Passenger name record number (Booking Number).
| passengerInfo       | JSON       | Passenger name record number (Booking Number). Array of `passenger_info`
| flightInfo          | String     | Information about a flight. Array of `flight_info`
| passengerSegmentInfo| JSON       | Information about a passenger. Array of passenger_segment_info.
| priceInfo           | JSON       | Itemization of the total price
| basePrice           | Number     | Itemization of the total price
| tax                 | Number     | Tax amount
| totalPrice          | Number     | Total price for the booking
| currency            | String     | Pricing currency

## FacebookMessenger.sendAirlineCheckinTemplate
Send a check-in reminder message.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| introMessage   | String     | Introduction message.
| locale         | String     | Two-letter language region code.
| themeColor     | String     | Background color of the attachment
| pnrNumber      | String     | Required: Passenger name record number (Booking Number).
| flightInfo     | JSON       | Information about a flight. Array of `passenger_segment_info`
| checkinUrl     | String     | URL for passengers to check-in

## FacebookMessenger.sendAirlineBoardingPassTemplate
Send a message that contains boarding passes for one or more flights or one more passengers. Message bubbles will be grouped by flight information -- if the flight information matches, all passengers will be share the same bubble. Multiple bubbles are automatically sent for all boarding_pass elements with different values for flight_info. In the future, we may group all boarding passes into the same bubble.

| Field          | Type       | Description
|----------------|------------|----------
| pageAccessToken| credentials| Page Access Token obtained from developer.facebook.com
| recipientId    | String     | Recipient ID.
| introMessage   | String     | Introduction message.
| locale         | String     | Two-letter language region code.
| themeColor     | String     | Background color of the attachment
| boardingPass   | JSON       | Boarding passes for passengers.

## FacebookMessenger.sendAirlineFlightUpdateTemplate
Send flight status update message.

| Field                           | Type       | Description
|---------------------------------|------------|----------
| pageAccessToken                 | credentials| Page Access Token obtained from developer.facebook.com
| recipientId                     | String     | Recipient ID.
| introMessage                    | String     | Introduction message.
| updateType                      | String     | Type of update for this notification.
| locale                          | String     | Two-letter language region code.
| themeColor                      | String     | Background color of the attachment
| pnrNumber                       | String     | Passenger name record number (Booking Number).
| updateFlightInfoFlightNumber    | String     | Flight number
| updateFlightInfoDepartureAirport| JSON       | Departure airport (airport object)
| updateFlightInfoArrivalAirport  | JSON       | Arrival airport
| updateFlightInfoFlightSchedule  | JSON       | Schedule for the flight. flight_schedule object

