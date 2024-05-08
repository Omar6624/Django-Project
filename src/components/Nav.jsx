import { navLinks } from "../constant";
import DropdownButton from "./DropdownButton";

const Nav = () => {
  return (
    <header>
      <nav className="flex flex-1 justify-end p-3 shadow-md dark:text-white ">
        <ul className="flex gap-10 flex-nowrap justify-center items-center max-lg:hidden font-montserrat text-gray-600">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="text-lg  font-montserrat hover:bg-gray-300
              py-2 px-4
              border-none rounded-lg leading-normal "
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className=" hidden max-lg:block  text-right focus-visible:ring-2">
          <DropdownButton />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
