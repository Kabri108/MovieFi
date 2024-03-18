import React from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Component/UsedInput';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 md:w-3/5 flex-colo p-14 bg-dry rounded-lg border border-border gap-8">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="Email"
            placeholder="moviefi@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="***********"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 p-4 text-white rounded-lg w-full"
          >
            <FiLogIn /> Sign In
          </Link>
          <p className='text-center text-border'>
            Don't have an account?{" "}
            <Link to="/register" className='text-dryGray font-semibold ml-2'>Sign Up</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
