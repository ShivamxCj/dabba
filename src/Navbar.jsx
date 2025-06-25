import { navItems } from "./constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 bg-white ">
  <div className="container px-4 mx-auto">
    <div className="flex items-center justify-between">

      {/* Logo aligned to the left with margin */}
      <div className="flex items-center flex-shrink-0 ml-4">
        <img className="h-12 w-24" src={logo} alt="logo" />
      </div>

      {/* Nav Items (centered vertically) */}
      <ul className="hidden lg:flex ml-14 space-x-12 items-center">
        {navItems.map((items, index) => (
          <li
            key={index}
            className="hover:text-orange-500 ease-in-out duration-200"
          >
            <a href={items.href}>{items.label}</a>
          </li>
        ))}
      </ul>

      {/* Contact Button (centered vertically) */}
      <div className="hidden lg:flex items-center space-x-12">
        <a
          className="bg-orange-500 text-white py-2 px-3 rounded-md
            hover:bg-none hover:bg-transparent hover:text-orange-500 transition duration-300"
        >
          Contact me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {/* Mobile Drawer */}
    {mobileDrawerOpen && (
      <div className="fixed top-0 right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
        <button
          onClick={() => setMobileDrawerOpen(false)}
          className="absolute top-4 right-4 text-black text-2xl"
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-4 hover:text-teal-600 ease-in-out duration-200"
            >
              <a
                href={item.href}
                onClick={() => setMobileDrawerOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-6">
          <a className="py-2 px-3 border rounded-md bg-orange-500">
            Contact Us
          </a>
        </div>
      </div>
    )}
  </div>
</nav>
  );
};

export default Navbar;
