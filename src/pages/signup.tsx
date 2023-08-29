import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from './../redux/hook';
import { createUser } from '../redux/userSlice/userSlice';


function Signup() {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state=>state.user);
  const [newData,setnewData] = useState({
    email:'',
    password:'',
    // retyped_password:''
  })

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setnewData({
      ...newData,
      [e.target.name]: e.target.value
    })
  }
  // toast.info("working");

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();
    dispatch(createUser({email:newData.email,password:newData.password}))
  }
  return (
    <div className="App bg-gray-100">
      {/* <ToastContainer/> */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Signup</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input onChange={handleChange} value={newData.email} required type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input onChange={handleChange} value={newData.password} required type="password" id="password" name="password" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="retyped_password" className="block text-gray-600">Reset Password</label>
              <input onChange={handleChange} value={newData.retyped_password} required type="password" id="retyped_password" name="retyped_password" className="w-full border border-gray-300 p-2 rounded" />
            </div> */}
            <div className="text-center">
              <button disabled={isLoading?true:false} type="submit" className={isLoading?"":"bg-blue-500"+" text-white py-2 px-4 rounded hover:bg-blue-600"}>Signup</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
