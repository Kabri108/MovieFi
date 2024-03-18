import React from 'react'
import Sidebar from './Sidebar'
import { Input } from '../../Component/UsedInput';
function Password() {
  return (
    <Sidebar>
       <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>
      <Input
            label="Previous Password"
            placeholder="******"
            type="password"
            bg={true}
          />
       <Input
            label="New Password"
            placeholder="*****"
            type="password"
            bg={true}
          />
       <Input
            label="Confirm Password"
            placeholder="*****"
            type="password"
            bg={true}
          />
          <div className="flex justify-end items-center my-4">
           
            <button className='bg-main transitions hover:bg-subMain border border-subMain flex-rows gap-4 text-white py-3 px-6 rounded-lg w-full sm:w-auto'>Update Password</button>
          </div>
      </div>
    </Sidebar>
  )
}

export default Password
