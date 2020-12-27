// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyB6L6PmXRbRgghHC30UCB2_ZvLwCs3QUwc",
    authDomain: "boxenstop-db-login.firebaseapp.com",
    databaseURL: "https://boxenstop-db-login-default-rtdb.firebaseio.com",
    projectId: "boxenstop-db-login",
    storageBucket: "boxenstop-db-login.appspot.com",
    messagingSenderId: "1009802942300",
    appId: "1:1009802942300:web:9b836033f59351b8f8d399",
    measurementId: "G-38YVYXV69B"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


