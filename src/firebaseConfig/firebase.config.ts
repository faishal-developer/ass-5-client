import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBokvz_T9M6QxplKLiui_8W8osuZnpiJmI",
  authDomain: "technet-ee758.firebaseapp.com",
  projectId: "technet-ee758",
  storageBucket: "technet-ee758.appspot.com",
  messagingSenderId: "163180968135",
  appId: "1:163180968135:web:f4d039d078fdb55bb866e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

