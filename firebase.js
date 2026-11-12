import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNteiSIvYvCJHJK33PO0P3-XgObn56wcY",
  authDomain: "engpaul-educare-ke.firebaseapp.com",
  projectId: "engpaul-educare-ke",
  storageBucket: "engpaul-educare-ke.firebasestorage.app",
  messagingSenderId: "794190960418",
  appId: "1:794190960418:web:e8081088427a74ad63b77b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
