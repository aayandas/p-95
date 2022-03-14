const firebaseConfig = {
    apiKey: "AIzaSyA5cPIFeB55VjVer74wTG5fyzviphzS-nM",
    authDomain: "p-94-kwitter.firebaseapp.com",
    projectId: "p-94-kwitter",
    storageBucket: "p-94-kwitter.appspot.com",
    messagingSenderId: "476271709282",
    appId: "1:476271709282:web:fd2d88302bfe1aaa99153b"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name-" + Room_names);
   row = "<div class='room_name' id="+Room_names +"onlick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}