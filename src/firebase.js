import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtTkAN3jBHRX63tPuUvdA8PTeIZE0srBw",
  authDomain: "fir-auth-8785.firebaseapp.com",
  projectId: "fir-auth-8785",
  storageBucket: "fir-auth-8785.appspot.com",
  messagingSenderId: "478477097514",
  appId: "1:478477097514:web:7d3b975bbc5430e0268153",
  measurementId: "G-17THK4R6PC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
