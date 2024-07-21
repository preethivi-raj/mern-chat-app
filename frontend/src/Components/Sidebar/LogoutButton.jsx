import {BiLogOut} from "react-icons/bi"
import  useLogout  from "../../Hooks/useLogout.js";

const LogoutButton = () => {

  const {loading , logout}= useLogout()
  return (
    <div className='mt-auto '> 
       {!loading ? (
        <BiLogOut className=" h-6 w-6 rounded-full text-white cursor-pointer"
        onClick={logout}
       />
       ): (
        <span className="loading loading-spinner"></span>
       ) }
    </div>
  )
}

export default LogoutButton