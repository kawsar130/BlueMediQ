import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    console.log(user);
    return (
        <div className="p-5">
            {
                user.email ?
                    <div className="pt-5">
                        <img src={user.photoURL} alt="" />
                        <h2>Welcome {user.displayName}</h2>
                        <p>You are signed in with <span><h5>{user.email}</h5></span></p>
                    </div>
                    :
                    <div className="pt-5">
                        <h2>You are not Logged-In</h2>
                        <h4>Please Login</h4>
                        <Button onClick={signInUsingGoogle} variant="info" size="md">Google Sign-In</Button>
                    </div>
            }
        </div>
    );
};

export default Login;