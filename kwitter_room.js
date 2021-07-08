
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB7c3e72wwPJCFfQjsS55FQoXIy-uqSdNc",
      authDomain: "kwiitter-92a45.firebaseapp.com",
      databaseURL: "https://kwiitter-92a45-default-rtdb.firebaseio.com",
      projectId: "kwiitter-92a45",
      storageBucket: "kwiitter-92a45.appspot.com",
      messagingSenderId: "163664246666",
      appId: "1:163664246666:web:19308e5ac7f0415e7e3a73"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    usersName=localStorage.getItem("Cuto");
    document.getElementById("UsaName").innerHTML="Welcome "+usersName;
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot){
       document.getElementById("FireBase_output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names =" + Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("FireBase_output").innerHTML+=row;
      //End code
      });});}
getData();
function AdaRomma(){
var Adds=document.getElementById("AddsRoom").value;
firebase.database().ref("/").child(Adds).update(
      {
purpose:"Add room name"
      }
);
localStorage.setItem("AddRoom" , Adds);
window.location="kwitter_page.html";
}
function LogLogout(){
      localStorage.removeItem("Cuto");
      localStorage.removeItem("AddRoom");
      window.location="index.html";
}