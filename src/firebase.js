import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpi11vjsOBg63XfQBaqMTbmy5fIAOVycU",
  authDomain: "idobatakaigi-55087.firebaseapp.com",
  projectId: "idobatakaigi-55087",
  storageBucket: "idobatakaigi-55087.appspot.com",
  messagingSenderId: "201161564724",
  appId: "1:201161564724:web:129276229df806a94e2061",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const messageRef = ref(db, "messages");
