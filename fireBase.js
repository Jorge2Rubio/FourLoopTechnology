// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzg2Lr05YxZRiGrGqv41maTyCLWZLX4NU",
  authDomain: "hellosailor-13d83.firebaseapp.com",
  databaseURL: "https://hellosailor-13d83-default-rtdb.firebaseio.com",
  projectId: "hellosailor-13d83",
  storageBucket: "hellosailor-13d83.appspot.com",
  messagingSenderId: "7309090904",
  appId: "1:7309090904:web:ec330e2ff8cbb78ed16a2d",
  measurementId: "G-BVXHL8HYH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const db = getDatabase();

let name1 = document.getElementById("name");
let email1 = document.getElementById("email");
let phone1 = document.getElementById("phone");
let message1 = document.getElementById("messageArea");

function writeUserData() {
  set(ref(db, "messages/" + name1.value), {
    Name: name1.value,
    Email: email1.value,
    Phone: phone1.value,
    Message: message1.value
  })
    .then(() => {
      alert("We received your message, Thank you for reaching out!");
    })
    .catch((error) => {
      alert(error);
    });
}

$("#contactSubmt").on("click", function () {

  if(name1.value == "" || email1.value == "" || phone1.value == "" || message1.value =="") {
    alert("Please fill up the fields!");
  }else {
    writeUserData();

  name1.value = "";
  email1.value = "";
  phone1.value = "";
  message1.value = "";
  }
});