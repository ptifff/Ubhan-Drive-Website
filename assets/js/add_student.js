
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

// Reference studentInfo collection
let studentInfo = firebase.database().ref("Students");

// Listen for form submission
document.querySelector("#studentAdd").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input values
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let gender = document.querySelector("#gender").value;
    let dob = document.querySelector("#dob").value;
    let rollNumber = document.querySelector("#rollNumber").value;
    let bloodGroup = document.querySelector("#bloodGroup").value;
    let religion = document.querySelector("#religion").value;
    let email = document.querySelector("#email").value;
    let section = document.querySelector("#section").value;
    let admissionId = document.querySelector("#admissionId").value;
    let phone = document.querySelector("#phone").value;
    let image = document.querySelector("#image").value;

    // Save student information
    saveStudentInfo(firstname, lastname, gender, dob, rollNumber, bloodGroup, religion, email, section, admissionId, phone, image);

    // Reset the form
    document.querySelector("#studentAdd").reset();
}

// Save student information to Firebase
function saveStudentInfo(firstname, lastname, gender, dob, rollNumber, bloodGroup, religion, email, section, admissionId, phone, image) {
    let newStudentInfo = studentInfo.push();

    newStudentInfo.set({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        dob: dob,
        cnic: rollNumber,
        bloodGroup: bloodGroup,
        religion: religion,
        email: email,
        address: section,
        admissionId: admissionId,
        phone: phone,
        image: image
    });
}
