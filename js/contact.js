// Firebase configuration
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

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("ContactForm");

// Function to validate the email address format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate the form inputs
function validateForm(name, email, message) {
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return false;
  } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }
  return true;
}


// Listen for a submit
document.querySelector(".php-email-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  if (validateForm(name, email, message)) {
    // Save contact info to Firebase
    saveContactInfo(name, email, message);

    // Display a success message
    document.querySelector(".alert").style.display = "block";

    // Remove the success message after 5 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 5000);

    // Reset the form
    document.querySelector(".php-email-form").reset();
}
}
// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}