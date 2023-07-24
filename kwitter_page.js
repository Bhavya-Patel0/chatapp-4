//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAzQJC4ZLJBW5MWhxZNhMTP8C-XldHhSZ8",
      authDomain: "kwitter-9a03f.firebaseapp.com",
      projectId: "kwitter-9a03f",
      storageBucket: "kwitter-9a03f.appspot.com",
      messagingSenderId: "626466552625",
      appId: "1:626466552625:web:853357049ac4e6dba6ce10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
