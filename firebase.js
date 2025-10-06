import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXssE52Q3u1nTXWmKfguosw8dRfyy8TLw",
  authDomain: "netflix-clone-9e2ad.firebaseapp.com",
  projectId: "netflix-clone-9e2ad",
  storageBucket: "netflix-clone-9e2ad.firebasestorage.app",
  messagingSenderId: "610666487583",
  appId: "1:610666487583:web:af610187235140d4acda2a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup=async(name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const logout=()=>{
    signOut(auth);
}

export {auth,db,signup,login,logout};