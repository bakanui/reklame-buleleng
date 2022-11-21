import { TbEdit } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={`md:w-[22vw] w-[70vw] ${!showSidebar && "hidden"}`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 md:px-7 sticky top-0 bg-primary rounded h-screen text-white">
        <Link to="/" className="flex items-center pl-2.5 md:mb-12 mb-5">
          <img
            src={`/logo.png`}
            className="mr-3 md:w-16 md:h-16 w-10 h-10"
            alt="BulelengLogo"
          />
          <div className="hidden md:block">
            <p className="self-center md:text-xl font-semibold whitespace-nowrap">
              Pendataan Reklame
            </p>
            <p className="self-center md:text-md font-semibold whitespace-nowrap">
              Kabupaten Buleleng
            </p>
          </div>
        </Link>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" && "bg-secondary text-primary"
              } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-primary hover:bg-secondary`}
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pendataan"
              className={`${
                location.pathname !== "/" && "bg-secondary text-primary"
              } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-primary hover:bg-secondary`}
            >
              <TbEdit className="text-2xl" />
              <span className="ml-3">Pendataan</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
