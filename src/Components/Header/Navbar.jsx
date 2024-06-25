import { useContext } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import ThemeToggle from "../Loader/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Success!");
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
          to="/allspots"
        >
          All Tourist Spots
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
          to="/addspot"
        >
          Add Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            `nav-link ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
          }
          to="/mylist"
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar my-5 rounded-b-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <IoMenuSharp className="text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <h3 className="block font-ubuntu text-3xl font-semibold leading-snug tracking-normal antialiased">
            TravelMastery
          </h3>
        </div>
        <div className="navbar-center hidden md:flex ">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
          {user ? (
            <div className="group relative cursor-pointer">
              <div
                id="clickable"
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>

              <button onClick={handleLogOut}>
                <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  LogOut
                </span>
              </button>
              <Tooltip anchorSelect="#clickable" clickable>
                <span>{user?.displayName}</span>
              </Tooltip>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-outline">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
