import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadig] = useState(true);

    const createUser = (email,password)=>{
        setLoadig(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
          setLoadig(true);
          return signInWithEmailAndPassword(auth,email,password);

    }
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;