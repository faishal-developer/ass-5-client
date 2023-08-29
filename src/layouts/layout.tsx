import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';
import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig/firebase.config';
import { useAppDispatch } from '../redux/hook';
import { setUser } from '../redux/userSlice/userSlice';
import { setLoading } from '../redux/userSlice/userSlice';

const Layout = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(setLoading(true));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user.email));
            }
            dispatch(setLoading(false));

        });
    },[])
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;