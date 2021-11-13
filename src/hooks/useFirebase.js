import { useEffect, useState } from "react";
import initializeAuth from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,updateProfile   } from "firebase/auth";

initializeAuth();
const useFirebase =()=>{
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();
    
    // register By Password
    const registerUser =(name,email, password,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);

            // save user to db 
            saveUser(email,name);

            // add user name 
            updateProfile(auth.currentUser, {
                displayName: name
                }).then(() => {
                    
                }).catch((error) => {
                    setError(error.message);
                    console.log(error);
                });
                history.replace('/');

        })
        .catch((error) => {

           setError(error.message)
        }).finally(()=>setIsLoading(false) )
    }

    // logout 
    const logout =()=>{
        setIsLoading(true)
        signOut(auth).then(() => {

        })
        .catch((error) => {

        })
        .finally(()=>setIsLoading(false) )
    }

    // login user by password 
    const loginUser =(email, password,history,location)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setUser(user);
        })
        .catch((error) => {
            setError (error.message);
        }).finally(()=>setIsLoading(false) )
    }

    // obserber 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user);
        } else {
            setUser({});
        }
        setIsLoading(false)
        });
        return ()=> unsubscribe;
    },[auth]);

    // check admin is true or not 
    useEffect(()=>{
        fetch(`https://calm-badlands-73470.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data =>setAdmin(data.admin) )

    },[user.email])


    const saveUser =(email,displayName)=>{
        const user = {email,displayName};
        fetch('https://calm-badlands-73470.herokuapp.com/users',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then()
    }


    return{
        user,
        setUser,
        error,
        registerUser,
        logout,
        loginUser,
        isLoading,
        admin

    }

}
export default useFirebase;