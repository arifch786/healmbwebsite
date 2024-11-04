import React from 'react'
import pic1 from "../assets/choose4.png";
import pic2 from "../assets/choose3.png";
import pic3 from "../assets/choose2.png";
import pic4 from "../assets/choose1.png";
import pic5 from "../assets/choose5.png";
const whychoose = () => {
  return (

    <div style={{ fontFamily: "'Playfair Display', serif"}} className="max-w-full mx-auto p-6 md:p-12 lg:px-24">
  
      <div class="text-center mb-8">
        <h1  class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Are You a Business or Clinic</h1>
        <p class="text-xl md:text-3xl font-medium text-gray-800">Looking for a Complete Wellness Solution?</p>
        <p class="text-gray-600 mt-2">HMB Connect offers personalized meditation and wellness tools tailored for businesses, clinics, and <br/> wellness professionals. Empower your employees or clients with resources to reduce stress, improve <br/> focus, and boost overall well-being.</p>
      </div>
  
  <div class="max-w-full mx-auto p-6 md:p-12">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <div class="p-6 text-center">
         
    <div class="text-center md:text-left mb-8">
      <h2 class="text-3xl md:text-4xl font-medium text-gray-800 leading-tight"><span class="font-extrabold" >Why Choose</span> <br/> HMB Connect?</h2>
    </div>
      </div>
      <div class="bg-white border-2 border-blue-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-lg">
        <div class="text-blue-500 mb-4">
        <img src={pic4} alt="Meditation" className="mx-auto w-10 h-10 object-cover" />
        </div>
        <p class="text-lg font-semibold text-gray-800">Personalized meditation and mindfulness sessions</p>
      </div>
    

      <div class="bg-white border-2 border-red-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-lg">
        <div class="text-red-500 mb-4">
        <img src={pic3} alt="Meditation" className="mx-auto w-10 h-10 object-cover" />
        </div>
        <p class="text-lg font-semibold text-gray-800">Access to a comprehensive wellness library</p>
      </div>

      <div class="bg-white border-2 border-green-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-lg">
        <div class="text-green-500 mb-4">
        <img src={pic2} alt="Meditation" className="mx-auto w-10 h-10 object-cover" />
        </div>
        <p class="text-lg font-semibold text-gray-800">AI-powered, tailored wellness plans</p>
      </div>

      <div class="bg-white border-2 border-purple-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-lg">
        <div class="text-purple-500 mb-4">
        <img src={pic5} alt="Meditation" className="mx-auto w-10 h-10 object-cover" />
        </div>
        <p class="text-lg font-semibold text-gray-800">Seamless integration into your existing wellness programs</p>
      </div>

      <div class="bg-white border-2 border-blue-200 rounded-lg p-6 text-center shadow-sm transition-all hover:shadow-lg">
        <div class="text-blue-500 mb-4">
        <img src={pic1} alt="Meditation" className="mx-auto w-10 h-10 object-cover" />
        </div>
        <p class="text-lg font-semibold text-gray-800">Create a healthier, more mindful environment for your team or clients</p>
      </div>

    </div>

  </div>
  
    </div>

  )
}

export default whychoose