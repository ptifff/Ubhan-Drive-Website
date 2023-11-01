
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

// Reference instructorInfo collection
let instructorInfo = firebase.database().ref("Instructor");

// Listen for form submission
document.querySelector("#instructoradd").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input values
    let instructorid = document.querySelector("#instructorid").value;
    let name = document.querySelector("#name").value;
    let gender = document.querySelector("#gender").value;
    let dob = document.querySelector("#dob").value;
    let mobile = document.querySelector("#mobile").value;
    let joiningdate = document.querySelector("#joiningdate").value;
    let licence = document.querySelector("#licence").value;
    let issue_date = document.querySelector("#issue_date").value;
    let expiry_date = document.querySelector("#expiry_date").value;
    let experience = document.querySelector("#experience").value;
    let Username = document.querySelector("#Username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let rpassword = document.querySelector("#rpassword").value;
    let address = document.querySelector("#address").value;
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zipcode = document.querySelector("#zipcode").value;
    let country = document.querySelector("#country").value;

    // Save instructor information
    saveinstructorInfo(instructorid, name, gender, dob, mobile, joiningdate, licence, issue_date, expiry_date, experience, Username, email, password, rpassword, address, city, state, zipcode, country);

    // Reset the form
    document.querySelector("#instructoradd").reset();
}

// Save instructor information to Firebase
function saveinstructorInfo(instructorid, name, gender, dob, mobile, joiningdate, licence, issue_date, expiry_date, experience, Username, email, password, rpassword, address, city, state, zipcode, country) {
    let newInstructorInfo = instructorInfo.push();

    newInstructorInfo.set({
        instructorid: instructorid,
        name: name,
        gender: gender,
        dob: dob,
        mobile: mobile,
        joiningdate: joiningdate,
        licence: licence,
        issue_date: issue_date,
        expiry_date: expiry_date,
        experience: experience,
        Username: Username,
        email: email,
        password: password,
        rpassword: rpassword,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country

    });
}
