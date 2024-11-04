import React from 'react'
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import group9 from "../assets/Group 9.png";

const Testimonial = () => {
  return (
    <div id='testimonials' style={{ fontFamily: "'Playfair Display', serif" }} className='bg-[#2bd8a7] lg:px-24 pt-5'>
      <div className="text-center text-white  px-4 py-10 sm:px-8 md:px-20 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 pt-5">What Our Users Are Saying</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-3xl p-4 md:p-6 text-center text-gray-800 shadow-md relative">
            <img src={group9} alt="Meditation" className="w-10 h-10 md:w-16 md:h-16 object-cover z-10 top-0 right-0 absolute rounded-3xl" />
            <div className="w-16 h-16 mx-auto mb-4">
              <img src={pic2} alt="User Image" className="rounded-full w-16 h-16"/>
            </div>
            <h3 className="font-semibold text-lg">Satisfied User</h3>
            <div className="flex justify-center items-center mt-2 mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-sm">“HealMindBody has transformed the way I approach meditation. The personalized sessions help me feel more centered and balanced every day.”</p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-6 text-center text-gray-800 shadow-md relative">
            <img src={group9} alt="Meditation" className="w-10 h-10 md:w-16 md:h-16 object-cover z-10 top-0 right-0 absolute rounded-3xl" />
            <div className="w-16 h-16 mx-auto mb-4">
              <img src={pic3} alt="User Image" className="rounded-full w-16 h-16"/>
            </div>
            <h3 className="font-semibold text-lg">Satisfied User</h3>
            <div className="flex justify-center items-center mt-2 mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-sm">“HealMindBody has transformed the way I approach meditation. The personalized sessions help me feel more centered and balanced every day.”</p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-6 text-center text-gray-800 shadow-md relative">
            <img src={group9} alt="Meditation" className="w-10 h-10 md:w-16 md:h-16 object-cover z-10 top-0 right-0 absolute rounded-3xl" />
            <div className="w-16 h-16 mx-auto mb-4">
              <img src={pic4} alt="User Image" className="rounded-full w-16 h-16"/>
            </div>
            <h3 className="font-semibold text-lg">Happy User</h3>
            <div className="flex justify-center items-center mt-2 mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-sm">“The AI-optimized meditations are a game-changer. I love how they're tailored to my mood and needs.”</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-3xl shadow hover:bg-gray-100 transition duration-200">Join Thousands of Happy Users</button>
          <button className="bg-[#2bd8a7] border-2 border-white text-white font-semibold py-2 px-4 rounded-3xl shadow hover:bg-teal-700 transition duration-200">Download HealMindBody Today</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
