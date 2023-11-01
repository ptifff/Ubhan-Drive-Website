// Import the necessary Firebase modules using ES modules
import { getStorage, ref, uploadBytes,getDownloadURL  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';
import { getFirestore, addDoc, serverTimestamp, collection } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';


// Initialize Firebase storage and firestore
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

  const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase storage and firestore
const storage = getStorage();
const firestore = getFirestore();

// Add event listener to the upload form
const uploadForm = document.getElementById("upload-form");
uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lectureFile = document.getElementById("lecture-file").files[0];
    const lectureName = document.getElementById("lecture-name").value;

    if (!lectureFile || !lectureName) {
        alert("Please select a file and provide a lecture name.");
        return;
    }

    const lectureRef = ref(storage, `lectures/${lectureName}`);
    let downloadUrl;
    try {
        // Read the lecture file as an ArrayBuffer
        const reader = new FileReader();
        reader.onload = async (event) => {
            const fileData = event.target.result;
            const metadata = {
                contentType: 'application/pdf',
                //contentType: 'image/jpeg',
            }
            // Upload the lecture file to Firebase Storage
            await uploadBytes(lectureRef, fileData, metadata);
            downloadUrl = await getDownloadURL(lectureRef);

            // Store lecture metadata in Firestore
            await addDoc(collection(firestore, "lectures"), {
                name: lectureName,
                timestamp: serverTimestamp(),
                downloadUrl: downloadUrl,
            });

            document.getElementById("upload-status").innerText = "Lecture uploaded successfully!";
        };

        reader.readAsArrayBuffer(lectureFile);
    } catch (error) {
        console.error("Error uploading lecture:", error);
        alert("An error occurred while uploading the lecture.");
    }
});
