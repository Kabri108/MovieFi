import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Input } from '../../Component/UsedInput';
import Uploder from '../../Component/Uploder'
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ProfileValidation} from '../../Component/Validation/UserValidation';
import { InlineError } from '../../Component/Notification/Error';
import ImagePreview from '../../Component/ImagePreview';
import { deleteProfileAction, updateProfileAction } from '../../Redux/Actions/userActions';
import toast from 'react-hot-toast';


function Profile() {
  
  const dispatch = useDispatch();
  const { userInfo} = useSelector(
    (state) => state.userLogin
  );
  const [imageUrl,setImageUrl]=useState(userInfo ? userInfo.image : "")

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userUpdateProfile
  );
  const { isLoading:deleteLoading, isError:deleteError} = useSelector(
    (state) => state.userDeleteProfile
  );

  //validate user

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileValidation),
  });

  //UPDATE PROFILE
  const onSubmit = (data) => {
    dispatch(updateProfileAction({...data,image:imageUrl}))
  };

  //DELETE PROFILE
  const deleteProfile=()=>{
    window.confirm("Are you sure you want to delete your profile?")&&dispatch(deleteProfileAction())
  }


//useEffect
useEffect(() => {
  if(userInfo){
    setValue("fullname",userInfo?.fullname)
    setValue("email",userInfo?.email)
  }
  if(isSuccess){
    dispatch({type:"USER_UPDAT_PROFILE_RESET"})
  }
  if(isError || deleteError){
    toast.error(isError|| deleteError)
    dispatch({type:"USER_UPDAT_PROFILE_RESET"})
    dispatch({type:"USER_DELETE_PROFILE_RESET"})
  }
}, [userInfo, setValue,isError,isSuccess,dispatch,deleteError]);

  return (
    <Sidebar>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <div className='w-full grid lg:grid-cols-12 gap-6'>
          <div className='col-span-10'>
      <Uploder setImageUrl={setImageUrl}/>
          </div>
          {/* imagpreview */}
          <div className=' col-span-2'>
            <ImagePreview 
            image={imageUrl}
            name={
              userInfo? userInfo.fullname : "Moviefi"
            }/>
          </div>
        </div>
      <div className="w-full">
            <Input
              label="FullName"
              placeholder="MovieFi" 
              type="text"
              name="fullname"
              register={register('fullname')}
              bg={true}
            />
            {errors.fullname && <InlineError text={errors.fullname.message} />}
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
          <div className="flex flex-wrap  flex-col-reverse sm:flex-row justify-between items-center gap-2">
            <button
            onClick={deleteProfile}
            disabled={deleteLoading|| isLoading}
            className='bg-subMain transitions hover:bg-main border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto '>
            {
                deleteLoading ? "Deleting..." : "Delete Account"
              }

            </button>
            <button className='bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto'>
              {
                isLoading ? "Updating..." : "Update Profile"
              }
            </button>
          </div>
      </form>
    </Sidebar>
  );
}

export default Profile;
