import { FCM } from "@kazion/fcm-node-http";
import path from "path";

const fcm = new FCM(path.join(__dirname, "./cred.json"));

// Change it with your device token
const fcmToken =
  "duQcbv7iRdyxf_SiMmjzDb:APA91bGQ-7DZczS0HEQVNRXOn1lrYNrmeW8qZxfBEip2kbzkSyM3GmnUnm5Dui1EqORdPXta8foMF-0qBwCGYRJGDcWrqe1D06mMtssVu58eJVh6I0TNRw7e9hdg1Ni00CR80eVsIYYf";
const main = async () => {
  try {
    const response = await fcm.send(fcmToken, {
      notification: {
        body: "Firebase features test message",
        title: "Notification test",
      },
      data: {
        id: "66d88b3b66a8113228aff4f3",
      },
      // IOS ONLY
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
    console.log("main -> response", response);
  } catch (error: any) {
    console.log(error);
  }
};

main();
