import {
  User2,
  MapPin,
  X,
  LogOut,
  CreditCard,
  PackageCheck,
  Settings,
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";
import { navItems } from "./constants";
import { categories } from "./constants";

const NewNavbar= () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [location, setLocation] = useState("Detecting...");
  const [pincode, setPincode] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const profileRef = useRef();
  

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const fetchLocation = async (lat, lng) => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=a8cb9ada58e3491894f73803f43d8752`
        );
        const data = await response.json();
        const components = data.results[0]?.components;
        const city =
          components?.city ||
          components?.town ||
          components?.village ||
          components?.hamlet ||
          "Unknown city";
        const country = components?.country || "Unknown country";
        const postalCode = components?.postcode || "";
        setLocation(`${city}, ${country}`);
        setPincode(postalCode);
      } catch (error) {
        setLocation("Unable to retrieve location");
      }
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchLocation(position.coords.latitude, position.coords.longitude);
        },
        () => setLocation("Location access denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-white shadow-md text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img className="h-12 w-24" src={logo} alt="logo" />
              <div className="text-sm max-w-[180px] flex flex-col">
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  {location}
                </span>
                {pincode && <span className="text-xs text-gray-500 ml-5">Pincode: {pincode}</span>}
              </div>
            </div>

            <div className="hidden lg:flex space-x-6 items-center">
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowCategories((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Categories <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-10 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-md"
                    >
                      <ul className="py-2 text-sm">
                        {categories.map((cat, i) => (
                          <li key={i} className="px-4 py-2 hover:bg-gray-100">
                            <a href={`/#${cat.replace(/\s+/g, '-').toLowerCase()}`}>{cat}</a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative flex items-center h-10">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="h-full px-4 py-2 border border-gray-300 bg-white text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="h-full px-3 py-2 bg-orange-500 text-white rounded-r-md">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4" ref={profileRef}>
              <button className="hover:text-orange-500">
                <Bell size={22} />
              </button>
              <button
                onClick={() => setShowProfileMenu((prev) => !prev)}
                className="p-2 rounded-full border border-transparent hover:border-yellow-400 hover:text-orange-500"
              >
                <User2 size={24} />
              </button>
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-6 top-16 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50"
                  >
                    <ul className="py-2 text-sm">
                      <li><a href="/account" className="flex items-center px-4 py-2 hover:bg-gray-100"><Settings size={16} className="mr-2" />Your Account</a></li>
                      <li><a href="/orders" className="flex items-center px-4 py-2 hover:bg-gray-100"><PackageCheck size={16} className="mr-2" />Your Orders</a></li>
                      <li><a href="/payments" className="flex items-center px-4 py-2 hover:bg-gray-100"><CreditCard size={16} className="mr-2" />Payments</a></li>
                      <li><button onClick={() => alert("Logged out!")} className="w-full flex items-center px-4 py-2 hover:bg-gray-100"><LogOut size={16} className="mr-2" />Log Out</button></li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* -----mobile view---------- */}

            <div className="lg:hidden flex items-center">
              <button onClick={toggleMobileDrawer}>
                {mobileDrawerOpen ? <X /> : <User2 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden px-4 py-2 bg-white shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center h-10">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 h-full px-4 py-2 border border-gray-300 bg-white text-black rounded-l-md"
            />
            <button className="h-full p-2 bg-orange-500 text-white rounded-r-md">
              <Search size={18} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full bg-white z-40 p-6 overflow-y-auto flex flex-col items-center text-gray-800"
          >
            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>

            <p className="text-sm flex items-center gap-1 my-4">
              <MapPin className="w-4 h-4 text-orange-500" />
              {location}
            </p>
            {pincode && <p className="text-xs text-gray-500">Pincode: {pincode}</p>}

            <ul className="w-full text-sm">
              <li><a href="/account" className="flex items-center px-4 py-3 hover:bg-gray-100"><Settings size={18} className="mr-2" />Your Account</a></li>
              <li><a href="/orders" className="flex items-center px-4 py-3 hover:bg-gray-100"><PackageCheck size={18} className="mr-2" />Your Orders</a></li>
              <li><a href="/payments" className="flex items-center px-4 py-3 hover:bg-gray-100"><CreditCard size={18} className="mr-2" />Payments</a></li>
              <li><button onClick={() => alert("Logged out!")} className="w-full flex items-center px-4 py-3 hover:bg-gray-100"><LogOut size={18} className="mr-2" />Log Out</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewNavbar;
