import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Input } from '../../Component/UsedInput';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordValidation } from '../../Component/Validation/UserValidation';
import { InlineError } from '../../Component/Notification/Error';
import { changePasswordAction } from '../../Redux/Actions/userActions';
import toast from 'react-hot-toast';
function Password() {
  const dispatch =useDispatch();
  const {isLoading,isError,message,isSuccess}=useSelector(
    (state)=>state.userChangepassword
  )

  //validate password
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  }=useForm({
    resolver:yupResolver(PasswordValidation)
  })

  //on submit 

  const onSubmit=(data)=>{
    dispatch(changePasswordAction(data))
  }

  //useEffect
  useEffect(()=>{
    if(isSuccess){
      dispatch({type:"USER_CHANGE_PASSWORD_RESET"})
    }
    if(isError){
      dispatch({type:"USER_CHANGE_PASSWORD_RESET"})
    }
    if(message){
      toast.success(message)
      reset();
    }
  },[isSuccess,isError,message,reset,dispatch])



  return (
    <Sidebar>
       <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>
        <Input
            label="Old Password"
            placeholder="******"
            type="password"
            bg={true}
            name="oldPassword"
            register={register('oldPassword')}
          />
           {errors.oldPassword && <InlineError text={errors.oldPassword.message} />}
       <Input
            label="New Password"
            placeholder="******"
            type="password"
            bg={true}
            name="newPassword"
            register={register('newPassword')}
          />
           {errors.newPassword && <InlineError text={errors.newPassword.message} />}
       <Input
            label="Confirm Password"
            placeholder="******"
            type="password"
            bg={true}
            name="confirmPassword"
            register={register('confirmPassword')}
          />
           {errors.confirmPassword && <InlineError text={errors.confirmPassword.message} />}
          <div className="flex justify-end items-center my-4">
           
            <button 
            disabled={isLoading}
            type='submit' 
            className='bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto'> 
            {
              isLoading? "Changing...":"Change Password"
            }
            </button>
          </div>
      </form>
    </Sidebar>
  )
}

export default Password
