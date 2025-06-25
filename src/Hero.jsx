import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="rounded m-4 mx-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3">
      <h3 className="font-bold text-lg">Tiffin</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi quam veritatis aperiam delectus,</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3">
      <h3 className="font-bold text-lg">Meal Combos</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi quam veritatis aperiam delectus,</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded p-4 border rounded border-black-1/3">
      <h3 className="font-bold text-lg">Thali</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi quam veritatis aperiam delectus,</p>
    </div>
  </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-black text-4xl md:text-6xl font-bold text-center px-4 transform -translate-y-40">
          Ghar jaisa khana <br />{" "}
          <span className="text-orange-500">Yahi se mangana</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
