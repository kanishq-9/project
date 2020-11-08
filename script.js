var firebaseConfig = {
    apiKey: "AIzaSyDZgEavj5wPDD7bmSChamKvwKCQFK2Tudk",
    authDomain: "ez2code-7f083.firebaseapp.com",
    databaseURL: "https://ez2code-7f083.firebaseio.com",
    projectId: "ez2code-7f083",
    storageBucket: "ez2code-7f083.appspot.com",
    messagingSenderId: "491391731551",
    appId: "1:491391731551:web:d47b2784c1f19d6e0958ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let qrcode = select("img");
let qrtext = select("textarea");
let qrbtn = select("button");

qrbtn.addEventListener("click", generateQR);

function generateQR() {
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
}

function select(el) {
  return document.querySelector(el);
}


function signOut(){
auth.signOut();
alert("Signed Out");


}

auth.onAuthStateChanged(function(user){
if(user){
var email=user.email;
alert("Active User  "+email);
}else{
alert("no Active User");
}

});