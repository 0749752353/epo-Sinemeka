import { Link, NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";


export const Header = () => {

  const [hidden, setHidden] = useState(true); 
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const activeClass="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";


  const handleSubmit = (e) => {

    e.preventDefault();
    const query = e.target.search.value;
    e.target.reset();
    return query.length > 0 ? navigate(`/search?query=${query}`) : navigate("/");
  }

  return (
    <header>



<nav className=" border-b-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-14" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sinemeka</span>
        </Link>
        <div className="flex md:order-2">
        <button
      onClick={() => setDarkMode(!darkMode)}
      type="button"
      className="mr-8 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5 me-1 flex items-center gap-2"
    >
      {darkMode ? "Light" : "Dark"}
      <svg
        className="w-5 h-5 transition-transform duration-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {darkMode ? (
          // Moon (for dark mode)
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        ) : (
          // Sun (for light mode)
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fill="none"
            d="M12 3v1m0 16v1m8.485-4.485l-.707.707M5.515 5.515l-.707.707m16.97 0l-.707-.707M5.515 18.485l-.707-.707M21 12h-1m-16 0H3"
          />
        )}
      </svg>
    </button>
          <button
          id="Mobile-navbar" 
          onClick={() => setHidden(!hidden)}
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            <form onSubmit={handleSubmit}>

            <input
            name="search"
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              autoComplete="off"
            />

            </form>
            
          </div>
          <button
         id="nav-links" 
          onClick={() => setHidden(!hidden)}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className={`${ hidden ? "hidden" : "" } items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-left ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <form onSubmit={handleSubmit}>

            <input
            name="search"
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              autoComplete="off"
            />

            </form>

        
          </div>

          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({isActive}) => isActive? activeClass:inActiveClass} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies/popular" className={({isActive}) => isActive? activeClass:inActiveClass} >Popular</NavLink>
            </li>
            <li>
              <NavLink to="/movies/top" className={({isActive}) => isActive? activeClass:inActiveClass}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcoming" className={({isActive}) => isActive? activeClass:inActiveClass}>Up Coming</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </header>
  )
}
