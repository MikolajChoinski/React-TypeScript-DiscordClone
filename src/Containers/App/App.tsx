import Sidebar from './Sidebar/index';
import React, { useEffect } from 'react'
import './App.css'
import Chat from './Chat/index';
import { selectUser } from '../../redux/userSlice.ts';
import { useSelector, useDispatch  } from 'react-redux';
import Login from './Login/Login.tsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { login, logout } from '../../redux/userSlice.ts';


function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
       onAuthStateChanged(auth, (authUser) => {
        console.log("user is", authUser);
        if (authUser) {
            // the user is log in
            dispatch(login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                email: authUser.email,
                displayName: authUser.displayName,
            }))
        } else {
            //the user is log out
            dispatch(logout());
        }
       }) 
    }, [dispatch])

    return (
    <div className='app'>
    {user ? (
        <>
            <Sidebar />
            <Chat />
        </>
    ): (
        <Login />
    )}
        
    </div>
    );
}

export default App
