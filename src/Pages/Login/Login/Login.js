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

                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10 offset-sm-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" for="gridCheck1">
                                            New User?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>

                        <br />
                        <h3>You can also sign in with Google</h3>

                        <Button onClick={signInUsingGoogle} variant="info" size="md">Google Sign-In</Button>
                    </div>
            }
        </div>
    );
};

export default Login;