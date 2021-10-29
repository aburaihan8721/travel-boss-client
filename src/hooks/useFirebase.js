import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const loginUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

   return signInWithPopup(auth, googleProvider)
      
  };

  return {
    loginUsingGoogle,
    user,
    setUser,
  };
};

export default useFirebase;
