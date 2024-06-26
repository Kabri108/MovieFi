import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Component/UsedInput';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { registerAction } from '../Redux/Actions/userActions';
import { RegisterValidation } from '../Component/Validation/UserValidation';
import { useForm } from 'react-hook-form';
import { InlineError } from '../Component/Notification/Error';


function Register() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {isLoading,isError,userInfo,isSuccess}=useSelector((state)=>state.userRegister)

  //validate user

  const { handleSubmit, register, formState: { errors } } = useForm({
   resolver:yupResolver(RegisterValidation)
  });

  //on submit
  const onSubmit=(data)=>{
    
   dispatch(registerAction(data))
  }

//useEffect
useEffect(()=>{
  if(userInfo?.isAdmin){
    navigate('/dashboard')
  }

  else if(userInfo){
    navigate('/profile')
  }
  if(isSuccess){
    toast.success(`Welcome back${userInfo?.fullName}`)
    dispatch({type:"USER_REGISTE_RESET"})
  }
  if(isError){
    toast.error(isError);
    dispatch({type:"USER_REGISTE_RESET"})
  }
},[userInfo,isSuccess,isError,navigate,dispatch])


  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
       <form onSubmit={handleSubmit(onSubmit)}  className="w-full 2xl:w-2/5 md:w-3/5 flex-colo p-14 bg-dry rounded-lg border border-border gap-8">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <Input
              label="FullName"
              placeholder="MovieFi" 
              type="text"
              name="fullName"
              register={register('fullName')}
              bg={true}
            />
            {errors.fullName && <InlineError text={errors.fullName.message} />}
          </div>
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
          <div className='w-full'>
          <Input
            label="Password"
            placeholder="******"
            type="password"
            bg={true}
            name="password"
            register={register('password')}
          />
           {errors.password && <InlineError text={errors.password.message} />}
          </div>
          <button disabled={isLoading}
           type="submit"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 p-4 text-white rounded-lg w-full"
          >
            {
              //if loading
              isLoading ? (
                'Loading...'
              ) : (
                <>
                  <FiLogIn /> Sign Up
                </>
              )
            }
          </button>
          <p className='text-center text-border'>
            Alredy have an account?{" "}
            <Link to="/login" className='text-dryGray font-semibold ml-2'>Sign In</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
