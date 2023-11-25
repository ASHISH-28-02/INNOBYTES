import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

var lang = 10.0497094;
var long = 76.333456;
var newMarker;
var querySnapshot;
var requestOf;

const details = document.querySelector(".details");
const name = document.querySelector(".name");
const phone = document.querySelector(".phone");

const firebaseConfig = {
    apiKey: "AIzaSyCNKvlciXddZeKP28TFpxVkhe3L3Kdsh6o",
    authDomain: "codecrypt-54269.firebaseapp.com",
    databaseURL: "https://codecrypt-54269-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "codecrypt-54269",
    storageBucket: "codecrypt-54269.appspot.com",
    messagingSenderId: "564925056055",
    appId: "1:564925056055:web:e80543052430a238266bb2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var map = L.map('map').setView([lang,long], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([lang,long]).addTo(map);

document.querySelector('.police').addEventListener('click', async () => {
    requestOf = "police";
    details.style.opacity = 1;
    name.innerText = "Name : Arun";
    phone.innerText = "Phone : 979******";
});

document.querySelector('.medic').addEventListener('click', async () => {
    requestOf = "medic";
    details.style.opacity = 1;
    name.innerText = "Name : Sindhu";
    phone.innerText = "Phone : 945******";
});

document.querySelector('.fireForce').addEventListener('click', async () => {
    requestOf = "fireForce";
    details.style.opacity = 1;
    name.innerText = "Name : Vijesh";
    phone.innerText = "Phone : 979******";
});


document.querySelector('.request').addEventListener('click', async () => {
    if (newMarker)
        map.removeLayer(newMarker);
    if(requestOf === "police"){
        querySnapshot = await getDocs(collection(db, "Locations"));
        querySnapshot.forEach((doc) => {
        if (doc.id === "police") {
            const { lang, long } = doc.data();
            newMarker = L.marker([lang, long]).addTo(map);
            newMarker.bindPopup("Police").openPopup();
        }
    });
    }
    else if(requestOf === "medic"){
        querySnapshot = await getDocs(collection(db, "Locations"));
        querySnapshot.forEach((doc) => {
        if (doc.id === "medic") {
            const { lang, long } = doc.data();
            newMarker = L.marker([lang, long]).addTo(map);
            newMarker.bindPopup("medic").openPopup();
        }
    });
    }
    else if(requestOf === "fireForce"){
        querySnapshot = await getDocs(collection(db, "Locations"));
        querySnapshot.forEach((doc) => {
        if (doc.id === "fireForce") {
            const { lang, long } = doc.data();
            newMarker = L.marker([lang, long]).addTo(map);
            newMarker.bindPopup("Fireforce").openPopup();
        }
    });
    }
});
