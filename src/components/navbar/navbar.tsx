import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logoutUser } from "../../redux/userSlice/userSlice";

const Navbar = () => {
    const {user} = useAppSelector(state=>state.user);
    const dispatch=useAppDispatch();

    return (
        <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">My Books</h1>
            <ul className="flex space-x-4">
              <Link to='/'>Home</Link>
              {
                user?.email ?(
                  <>
                    <Link to='/add-book'>Add Book</Link>
                    <p>{user.email}</p>
                    <button onClick={()=>dispatch(logoutUser())}>Logout</button>
                  </>
                ):(
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                  </>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;