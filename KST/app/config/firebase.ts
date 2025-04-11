import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZxG9v14r6d0RpaFpyzDpAHG1O5qZjcw4",
  authDomain: "kst-app-2545.firebaseapp.com",
  databaseURL: "https://kst-app-2545-default-rtdb.firebaseio.com",
  projectId: "kst-app-2545",
  storageBucket: "kst-app-2545.firebasestorage.app",
  messagingSenderId: "1070754384678",
  appId: "1:1070754384678:web:890721dd999a26e10e0fe7",
  measurementId: "G-B9NVVF2Q5W"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app); 