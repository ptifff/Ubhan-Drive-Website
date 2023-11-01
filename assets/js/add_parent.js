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

// Reference ParentInfo collection
let ParentInfo = firebase.database().ref("Parents");

// Listen for form submission
document.querySelector("#parentadd").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input values
    let parentid = document.querySelector("#parentid").value;
    let relationship = document.querySelector("#relationship").value;
    let name = document.querySelector("#name").value;
    let traineename = document.querySelector("#traineename").value;
    let cnicnumber = document.querySelector("#cnicnumber").value;
    let profession = document.querySelector("#profession").value;

    // Save parent information
    saveParentInfo(parentid, relationship, name, traineename, cnicnumber, profession);

    // Reset the form
    document.querySelector("#parentadd").reset();
}

// Save parent information to Firebase
function saveParentInfo(parentid, relationship, name, traineename, cnicnumber, profession) {
    let newParentInfo = ParentInfo.push();

    newParentInfo.set({
        parentid: parentid,
        relationship: relationship,
        name: name,
        traineename: traineename,
        cnicnumber: cnicnumber,
        profession: profession,
    });
}
