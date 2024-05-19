// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0hx0u0ZJMnYQHzUvrE59ttVyaDxHKZ8",
  authDomain: "tiger-book-log.firebaseapp.com",
  projectId: "tiger-book-log",
  storageBucket: "tiger-book-log.appspot.com",
  messagingSenderId: "508472055301",
  appId: "1:508472055301:web:fa7e02a68ffb66300c2e6c",
  measurementId: "G-05HKETPF7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app ;