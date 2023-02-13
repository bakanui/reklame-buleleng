import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import profile from "./profile.png";

interface NavbarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setShowSidebar }: NavbarProps) => {
  const [showLogout, setShowLogout] = useState(false);
  const [name, setName] = useState("");
  const [id_role, setId_role] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    customFetch("/api/profile").then((res) => {
      setName(res.name);
      setId_role(res.id_role);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <nav className="px-5 bg-white border-gray-200 shadow-lg w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <button
          onClick={() => setShowSidebar((current) => !current)}
          className="flex items-center text-3xl"
        >
          <GiHamburgerMenu />
        </button>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        ></button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex gap-3 text-xl justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                <img src={profile} alt="" />
                <div>
                  <p>{name}</p>
                  <p className="text-xs">
                    {id_role === 1 ? <span>Admin</span> : <span>User</span>}
                  </p>
                </div>
                <svg
                  onClick={() => setShowLogout((current) => !current)}
                  className="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div
          onClick={handleLogout}
          className={`${
            !showLogout ? "hidden" : "block"
          } w-52 h-16 bg-white text-xl gap-2 text-primary rounded-md font-semibold shadow-md absolute top-24 right-12 flex items-center pl-3`}
        >
          <MdLogout />
          <p>Keluar</p>
        </div>

        {/* Mobile Navbar */}

        <div className="md:hidden" id="mobile-menu">
          <button
            onClick={() => setShowLogout((current) => !current)}
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex gap-3 text-xl justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
          >
            <img className="w-10" src={`/profile.png`} alt="user-profile" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
