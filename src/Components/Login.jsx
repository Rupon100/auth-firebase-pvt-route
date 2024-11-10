import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email, pass)

        signInUser(email, pass)
        .then(result => {
            console.log(result.user);
            e.target.reset(); // for reset all boxes
            navigate('/');
        })
        .catch(error => {
            console.log("Error", error);
        })
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            console.log("Error", error);
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p className='text-xs text-center p-2'>new to this website? <Link to='/register' className='text-sm p-1 hover:bg-white  rounded  hover:text-black transition-all'>Register</Link> </p>
            <p>
                <button onClick={handleGoogleLogin}>Google</button>
            </p>

          </div>
        </div>
        </div>
    );
};

export default Login;