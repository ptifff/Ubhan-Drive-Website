//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARxuWgmAcVMuHI2pRmUdBFy9anXcdVKWI",
  authDomain: "ubhan-drive.firebaseapp.com",
  databaseURL: "https://ubhan-drive-default-rtdb.firebaseio.com",
  projectId: "ubhan-drive",
  storageBucket: "ubhan-drive.appspot.com",
  messagingSenderId: "59364518993",
  appId: "1:59364518993:web:1c35633659058936fc5c70",
  measurementId: "G-BXH3GXT4ZY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()



// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value


  auth.signInWithEmailAndPassword(email, password)
  .then(function() {

    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('last login/' + user.uid).update(user_data)
 // DOne
    //alert('User logged in!!')
    location.replace("index.html");

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}


function logout(){
    firebase.auth().signOut()
}

const unsubscribe  = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      document.getElementById("account").style.display = "none"
      document.getElementById("logoutli").style.display = "block"
    } 
    else {
      console.log('signout success')
      document.getElementById("account").style.display = "block"
      document.getElementById("logoutli").style.display = "none"
    }
  });
