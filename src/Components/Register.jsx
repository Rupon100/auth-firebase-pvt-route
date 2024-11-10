import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(name ,email, pass);

        // create user
        createUser(email, pass)
        .then(result => {
            console.log(result.user);
            e.target.reset();
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
            <h1 className="text-2xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <p className='text-xs text-center p-2'>already have an account? <Link to='/login' className='text-sm p-1 hover:bg-white  rounded  hover:text-black transition-all'>Login</Link> </p>

          </div>
        </div>
        </div>
    );
};

export default Register;