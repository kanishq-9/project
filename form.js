  // Your web app's Firebase configuration
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

function signUp(){
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(e=> alert(e.message));
alert("Signed Up");



}

function signIn(){
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise=auth.signInWithEmailAndPassword(email.value,password.value);
promise.catch(e=> alert(e.message));
document.location.href="home.html"


}


auth.onAuthStateChanged(function(user){
if(user){
var email=user.email;
alert("Active User  "+email);
}else{
alert("no Active User");
}

});

