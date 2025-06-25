import React from 'react'

const Hero = () => {
  return (
     <section className="relative h-screen w-full">

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-black text-4xl md:text-6xl font-bold text-center px-4 transform -translate-y-20">
          your comfy food starts here
        </h1>
      </div>
    </section>
  )
}

export default Hero
