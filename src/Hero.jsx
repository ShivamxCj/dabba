import React from "react";
import tiffin from "./assets/tiffin.png"
import thali from "./assets/thali.png"
import snacks from "./assets/snacks.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* moto text */}
      <div className="p-2 mt-5 mb-0 md:mt-16 ">
        <h1 className="text-black text-3xl md:text-6xl font-bold text-center px-4 transform">
          Ghar jaisa khana <br />{" "}
          <span className="text-orange-500">Yahi se mangana</span>
        </h1>
      </div>

      <div className="rounded m-4 mx-8 my-4 md:my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

          {/* Card 1 */}
          <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3 flex flex-col transform hover:scale-105 transition duration-300 ">
            <h3 className="font-bold text-lg">Tiffin</h3>
            <p  className="my-4">
              Get tiffins at your doorstep with exiting menus.
            </p>
            <div className="mt-4">
                <img src={tiffin} alt="tiffin image" className="w-full h-40 object-contain rounded" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3 flex flex-col transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-lg">Snacks</h3>
            <p className="flex-grow my-4">
              Fulfill your cravings hot and fresh
            </p>
             <div>
                <img src={snacks} alt="tiffin image" className="w-full h-40 object-contain rounded " />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3 flex flex-col transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-lg">Thali</h3>
            <p className="flex-grow my-4">
              Get flavours of different dishes at one place
            </p>
             <div>
                <img src={thali} alt="tiffin image" className="w-full h-40 object-contain rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
