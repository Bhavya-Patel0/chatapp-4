
// Your web app's Firebase configuration
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

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("home_name",room_name);

      window.location="kwitter_page.html"
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}