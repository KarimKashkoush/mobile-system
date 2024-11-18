import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
      apiKey: "AIzaSyDtMpimc12olO_XX9MEZhFyRG3SgXdRWyM",
      authDomain: "mobsystm.firebaseapp.com",
      databaseURL: "https://mobsystm-default-rtdb.firebaseio.com",
      projectId: "mobsystm",
      storageBucket: "mobsystm.firebasestorage.app",
      messagingSenderId: "599014351526",
      appId: "1:599014351526:web:361e3fc9c620655569ca67"
};


// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الحصول على خدمة المصادقة
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
