import { getStorage} from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';
import { getFirestore, collection,getDocs  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';

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

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

const lectureList = document.getElementById("lecture-list");

// Function to display lectures for students
const displayLectures = async () => {
    try {
        const lecturesCollection = await collection(firestore, "lectures");
        const lecturesSnapshot = await getDocs(lecturesCollection);

        lecturesSnapshot.forEach((doc) => {
            const lectureData = doc.data();
            const lectureLink = document.createElement("a");
            lectureLink.href = lectureData.downloadUrl;
            lectureLink.textContent = lectureData.name;
            lectureLink.target = "_blank";

            const listItem = document.createElement("li");
            listItem.appendChild(lectureLink);
            lectureList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching lectures:", error);
        alert("An error occurred while fetching lectures.");
    }
};

// Call the displayLectures function to load lectures when the page loads
displayLectures();
