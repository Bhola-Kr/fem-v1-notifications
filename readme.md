# FCM Node HTTP Example

This is a simple example of using the FCM Node HTTP library to send push notifications to devices.

## Prerequisites

- Node.js installed on your machine
- A Firebase project set up
- Create file `cred.json` file in root. A service account JSON file data will be added to (`cred.json`) for authentication.

## Installation

1. Clone this repository.
2. Run `yarn` to install dependencies.
3. Replace the `fcmToken` variable with your device token.
4. Replace the `title`, `body`, and `image` fields with your desired notification content.

## Usage

Run the script using `yarn send-notification"`. This will send a push notification to the device specified by the `fcmToken` variable.

## Notes

- This example includes an iOS-specific payload in the request.
- Ensure that your service account JSON file (`cred.json`) is correctly configured and placed in the same directory as your script.
