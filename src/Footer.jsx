import { section } from "framer-motion/client";
import { footer } from "framer-motion/m";
import React from "react";
// import { Instagram, Twitter, Mail, Phone, Whatsapp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 bg-orange-500 text-black text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Social Media */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 mt-8 mb-2">
        © {new Date().getFullYear()} Dabba | All rights reserved
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10%" }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-0 h-[2px] bg-black"
      />
    </footer>
  );
};

export default Footer;
