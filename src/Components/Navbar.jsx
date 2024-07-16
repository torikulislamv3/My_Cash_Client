import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex justify-around border h-[40px] bg-purple-700 items-center
    mx-[20px] lg:mx-[50px] my-5">
        <NavLink>
        <h3 className="text-white font-bold text-xl">Profile</h3>
        </NavLink>
        <NavLink>
        <h3 className="text-white font-bold text-xl">Home</h3>
        </NavLink>
       <NavLink>
       <h3 className="text-white font-bold text-xl">Logout</h3>
       </NavLink>
    </div>
  )
}
