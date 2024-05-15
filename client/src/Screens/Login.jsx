import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Component/UsedInput';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LoginValidation } from '../Component/Validation/UserValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { InlineError } from '../Component/Notification/Error';
import { loginAction } from '../Redux/Actions/userActions';
import toast from 'react-hot-toast';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  //validate user

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  //on submit
  const onSubmit = (data) => {
    dispatch(loginAction(data));
  };

  //useEffect
  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate('/dashboard');
    } else if (userInfo) {
      navigate('/profile');
    }
    if (isSuccess) {
      toast.success(`Welcome back ${userInfo?.fullName}`);
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: 'USER_LOGIN_RESET' });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 2xl:w-2/5 md:w-3/5 flex-colo p-14 bg-dry rounded-lg border border-border gap-8"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <Input
              label="Email"
              placeholder="moviefi@gmail.com"
              type="email"
              name="email"
              register={register('email')}
              bg={true}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>
          <div className="w-full">
            <Input
              label="Password"
              placeholder="******"
              type="password"
              name="password"
              register={register('password')}
              bg={true}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>
          <button
           
            disabled={isLoading}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 p-4 text-white rounded-lg w-full"
            title="submit"
          >
            {
              //if loading
              isLoading ? (
                'Loading...'
              ) : (
                <>
                  <FiLogIn /> Sign In
                </>
              )
            }
          </button>
          <p className="text-center text-border">
            Don't have an account?{' '}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
