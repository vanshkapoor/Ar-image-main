import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Login  = () => {
    return (
        <div>
            <Navbar />
<div className="container cnt" style={{marginTop:"50px"}}>
                {/* <Logincard /> */}
                <h1 className="head1">Login to your Account</h1>
                <form >
                    <div className="row">
                        <div className="form-group col-lg-12  ">
                            <input type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="user name" />
                        </div>
                        <div className="form-group col-lg-12 ">
                            <input type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="password" />
                        </div>
                        {/* <div className="checkbox">
                            <label><input type="checkbox" value="" />Remember me</label>
                        </div> */}

                    </div>
                        <Link to="/store"><button type="submit" style={{"backgroundColor":"#5a8cbd","border-radius":"8px","border":"none","padding":"10px"}}  className="btn-primary center-block">Submit</button></Link>
                </form>
                <div className="signupdiv">Dont have an account? <br /><Link to="/register">Sign up</Link></div>
            </div>
        </div>
    )
}

export default Login;