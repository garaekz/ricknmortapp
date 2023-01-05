import { Disclosure, Menu, Transition } from "@headlessui/react";
import { navigation } from "../router";
import { HiArrowLeft, HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../assets/rnm.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleMode } from "../store/darkModeSlice";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { BsGithub } from "react-icons/bs";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  
  return (
    <Disclosure as="nav" className="dark:bg-gray-800 bg-white sticky w-full top-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 dark:hover:bg-gray-700 text-slate-800 hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                {location.pathname.startsWith('/character/') && <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 dark:hover:bg-gray-700 text-slate-800 hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Go back button</span>
                  <HiArrowLeft className="block h-6 w-6" aria-hidden="true" />
                </button>}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to={"/"} className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      !item.hidden && <Link
                        key={item.name}
                        to={item.path}
                        className={`${
                          location.pathname === item.path
                            ? "dark:bg-gray-900 dark:text-white bg-slate-200 text-slate-800 font-bold"
                            : "font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100 hover:text-gray-900 text-slate-800"
                        } px-3 py-2 rounded-md text-sm`}
                        aria-current={location.pathname === item.path ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => dispatch(toggleMode())}
                  type="button"
                  className="p-2 rounded-full dark:bg-gray-800 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-800 focus:outline-none hover:dark:bg-gray-700 hover:bg-gray-100"
                >
                  <span className="sr-only">Toggle dark mode</span>
                  {darkMode ? (
                    <IoSunnyOutline className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMoonOutline className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className="p-2 rounded-full dark:bg-gray-800 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-800 focus:outline-none hover:dark:bg-gray-700 hover:bg-gray-100">
                    <a href="https://github.com/garaekz/ricknmortapp" target="_blank" rel="noopener noreferrer">
                      <BsGithub className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                !item.hidden && <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "dark:bg-gray-900 dark:text-white bg-slate-200 text-slate-800 font-bold"
                    : "font-medium dark:text-gray-300 text-slate-800 hover:bg-gray-700 hover:text-white"
                } block px-3 py-2 rounded-md text-base`}
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
