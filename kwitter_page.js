//YOUR FIREBASE LINKS
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
userName=localStorage.getItem("Cuto")
var room_name=localStorage.getItem("AddRoom")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id +" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function SendsoSequel(){
      mssgs=document.getElementById("sendso").value;
firebase.database().ref(room_name).push({
      name:userName , 
      message: mssgs ,
      like:0
});
document.getElementById("sendso").value=" ";
}
function updateLike(message_id){
      console.log("Morgerath");
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedLokiLikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updatedLokiLikes
});
}