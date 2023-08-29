import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginUser } from "../redux/userSlice/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {isLoading,user} = useAppSelector(state=>state.user);
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
    dispatch(loginUser({email:newData.email,password:newData.password}))
  }

  useEffect(()=>{
    if(user?.email){
      console.log("working",user.email,location)
      navigate(location.state.path);
    }
  },[user?.email])
  return (
    <div className="App bg-gray-100">
      {/* Login Form */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input onChange={handleChange} type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input onChange={handleChange} type="password" id="password" name="password" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="text-center">
              <button type="submit" className={isLoading?"":"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"}>Login</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
