var firebaseConfig = {
apiKey: "AIzaSyB6L6PmXRbRgghHC30UCB2_ZvLwCs3QUwc",
authDomain: "boxenstop-db-login.firebaseapp.com",
databaseURL: "https://boxenstop-db-login-default-rtdb.firebaseio.com",
projectId: "boxenstop-db-login",
storageBucket: "boxenstop-db-login.appspot.com",
messagingSenderId: "1009802942300",
appId: "1:1009802942300:web:9b836033f59351b8f8d399",
measurementId: "G-38YVYXV69B"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission().then(function(){
console.log('Genehmigung erteilt!');
return messaging.getToken();
})
.then(function(token){
console.log(token);
})
.catch(function(err){
console.log('Fehler');
})

messaging.onMessage(function(payload){
console.log('onMessage', payload);
});