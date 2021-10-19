import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        
        signInWithPopup(auth, googleProvider)
        .then( result => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error.message, error.code);
        });
    }

    // observe user state
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    } , []);

    const logOut = () => {
        signOut(auth)
        .then( () => {})
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;