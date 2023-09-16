import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Jumbotron } from "../src/components/jumbotron";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBolWNyeeaPxOOBxiL0j3-3uv16lRUNCM8",
  authDomain: "learnfirebase-f8c88.firebaseapp.com",
  projectId: "learnfirebase-f8c88",
  storageBucket: "learnfirebase-f8c88.appspot.com",
  messagingSenderId: "57033989384",
  appId: "1:57033989384:web:c2f91ca442d8d5b03320bd",
  measurementId: "G-FQZCCQRJEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Ensure analytics is initialized only on the client side
if (typeof window !== "undefined") {
  getAnalytics(app);
}

function HomePage() {
    return <Jumbotron />;
}
  
export default HomePage