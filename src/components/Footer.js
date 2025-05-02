import { NavLink , Link} from "react-router-dom";


export const Footer = () => {
  return (
    <footer>

<div className="w-full  p-4 md:flex md:items-center md:justify-between dark:bg-gray-900">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <Link to="/" className="hover:underline">epo-Sinemeka™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/popular" className="hover:underline me-4 md:me-6">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top" className="hover:underline me-4 md:me-6">Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming" className="hover:underline">Up Comming</NavLink>
          </li>
        </ul>
      </div>

    </footer>
  )
}
