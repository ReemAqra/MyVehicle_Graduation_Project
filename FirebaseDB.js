// https://firebase.google.com/docs/web/setup#available-libraries
const { initializeApp } =require('firebase/app');
const {getDatabase, ref, set } =require ("firebase/database");

// Initialize Firebase
const app=initializeApp({
    apiKey: "AIzaSyDSbqZFKMRyhc2e0CKYk8Rygr3Dt-PuWhI",
    authDomain: "myvehicle-634d0.firebaseapp.com",
    databaseURL: "https://myvehicle-634d0-default-rtdb.firebaseio.com",
    projectId: "myvehicle-634d0",
    storageBucket: "myvehicle-634d0.appspot.com",
    messagingSenderId: "1028443510514",
    appId: "1:1028443510514:web:f1af2db5cc44779559226b",
    serviceAccount :'./myvehicle.json'
});

// const firebaseDB = fb.database();
if (app){
    console.log('connection successfully...')

}else {console.log("error in connection") }
//firebaseDB.ref("thetext").child("child").set('cought string');

module.exports=app

