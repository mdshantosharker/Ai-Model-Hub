import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-10" src="/logo.png" alt="Logo" />
          <span className="font-bold text-xl">Ai Hub</span>
        </div>

        <ul className="hidden lg:flex gap-10 text-lg">
          <li>
            <a href="#" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a className="hidden lg:inline-flex btn bg-red-500 rounded-full text-white px-6 py-2">
            Get in Touch
          </a>

          <button
            className="lg:hidden btn btn-ghost btn-square"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2 bg-white shadow-md rounded-md">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a href="#" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Contact
              </a>
            </li>
            <li className="w-full">
              <a
                className="btn bg-red-500 rounded-full text-white w-full flex items-center justify-center py-2"
                href="#"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
