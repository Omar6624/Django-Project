import { navigation, classNames } from "../constant";
import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const DropdownButton = () => {
  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 hover:bg-gray-300 font-montserrat absolute top-2  left-6  rounded-md p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 hover:text-white focus:outline-none  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-sm bg- p-2 text-md text-gray-900  bg-gray-300 font-montserrat m-2  "
          >
            {navigation.map((item) => (
              <Fragment key={item.name}>
                <MenuItem>
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-md font-medium rounded-md  "
                    )}
                  >
                    {item.name}
                  </a>
                </MenuItem>
              </Fragment>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default DropdownButton;
