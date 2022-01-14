
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCIdUAcfAG_xzCNUC6qbPabbLrtKPn2vsw",
      authDomain: "c-93-be750.firebaseapp.com",
      databaseURL: "https://c-93-be750-default-rtdb.firebaseio.com",
      projectId: "c-93-be750",
      storageBucket: "c-93-be750.appspot.com",
      messagingSenderId: "915351402397",
      appId: "1:915351402397:web:f92723aeeefbfe8bdbe174",
      measurementId: "G-DE0T00ZJX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
