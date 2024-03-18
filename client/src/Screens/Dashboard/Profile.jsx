import React from 'react';
import Sidebar from './Sidebar';
import { Input } from '../../Component/UsedInput';
import Uploder from '../../Component/Uploder'
function Profile() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
      <Uploder/>
      <Input
            label="Full name"
            placeholder="moviefi"
            type="text"
            bg={true}
          />
       <Input
            label="Email"
            placeholder="moviefi@gmail.com"
            type="email"
            bg={true}
          />
          <div className="flex flex-wrap  flex-col-reverse sm:flex-row justify-between items-center">
            <button className='bg-subMain transitions hover:bg-main border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto'>Delete Account</button>
            <button className='bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto'>Update Account</button>
          </div>
      </div>
    </Sidebar>
  );
}

export default Profile;
