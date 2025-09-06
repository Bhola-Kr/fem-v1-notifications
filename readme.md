# 🔔 FCM Node HTTP Example

This is a **simple Node.js example** demonstrating how to send **push notifications** to Android and iOS devices using [@kazion/fcm-node-http](https://www.npmjs.com/package/@kazion/fcm-node-http).  

---

## 📌 Prerequisites

Before running the example, make sure you have:

- [Node.js](https://nodejs.org/) installed  
- A **Firebase project** set up in the [Firebase Console](https://console.firebase.google.com/)  
- A **Service Account JSON** file downloaded from Firebase  
  - Rename it to `cred.json` and place it in the **root directory** of this project  

---

## ⚙️ Installation

1. **Clone this repository**  
   ```bash
   git clone https://github.com/your-username/fcm-node-http-example.git
   cd fcm-node-http-example
````

2. **Install dependencies**

   ```bash
   yarn
   # or
   npm install
   ```

3. **Update the script**

   * Replace the `fcmToken` variable in `index.ts` with your device token.
   * Customize the `title`, `body`, or `data` fields as per your needs.

---

## 🚀 Usage

Run the script:

```bash
yarn send-notification
# or
npx ts-node index.ts
```

If successful, you’ll see a response in your console:

```
main -> response { messageId: '0:1234567890%abcdef1234567890' }
```

And the notification will appear on your device. 🎉

---

## 📲 Example Notification Payload

```ts
const response = await fcm.send(fcmToken, {
  notification: {
    title: "Notification test",
    body: "Firebase features test message",
  },
  data: {
    id: "66d88b3b66a8113228aff4f3",
  },
  // iOS specific payload
  apns: {
    payload: {
      aps: {
        sound: "default",
        badge: 1,
        content_available: true,
      },
    },
  },
});
```

---

## 📝 Notes

* This example includes an **iOS-specific APNs payload**.
* For Android, the `notification` and `data` fields are enough.
* Ensure your `cred.json` (service account file) is correct and matches your Firebase project.
* Device tokens must be valid and belong to an app registered in your Firebase project.

---

## 🤝 Contributing

PRs and improvements are welcome!
If you’d like to enhance this example or add features (like **topic-based messaging** or **multicast support**), feel free to open a pull request.

---

## 📬 Contact

👤 **Bhola Kumar*
📧 \[[b.kumar2298@gmail.com](mailto:b.kumar2298@gmail.com)]
🔗 \[GitHub/Bhola-Kr]

---

## ⭐ Support

If this project helped you, please **star the repo** ⭐
and share it with others who want to send FCM push notifications easily!
