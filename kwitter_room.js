
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDAi7wRiv5EkEPMfJYo3CC2Gg4wSj__PVc",
      authDomain: "project-94-e4a99.firebaseapp.com",
      databaseURL: "https://project-94-e4a99-default-rtdb.firebaseio.com",
      projectId: "project-94-e4a99",
      storageBucket: "project-94-e4a99.appspot.com",
      messagingSenderId: "458940241843",
      appId: "1:458940241843:web:5a18d59310facdf8de5dc6",
      measurementId: "G-Z41JQXVB4L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
