import React from 'react'
import button1 from "../assets/Group 6.png";
import button2 from "../assets/Frame 19.png";
import vector1 from "../assets/Vector3.png";
import vector2 from "../assets/vector2.png";
import logo from '../../src/assets/logo2.png';
import { FaLinkedinIn, FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from 'react-icons/lia';


const Footer = () => {
  return (
    <div  className='relative'>
        <div class="">
  <div class="relative mx-auto max-w-5xl -mb-20 px-4 sm:px-6 lg:px-8">

    <div class="bg-[#00A0FF] relative rounded-lg p-8 text-center text-white md:flex md:flex-col md:items-center md:justify-between md:p-12 shadow-lg">
    <img src={vector1} alt="Meditation" class="w-56 h-44 object-cover z-100 top-0 right-0 absolute" />
<img src={vector2} alt="Meditation" class="w-56 h-56 object-cover z-100 bottom-0 left-0 absolute" />
      <div>
        <h2 class="text-4xl font-medium mb-2">Try it Now – <span className='font-extrabold'>Free for 7 Days!</span></h2>
        <p class="text-sm">Start your healing journey today with our free 7-day trial. Download the app and explore everything HealMindBody has to offer, risk-free.</p>
      </div>
      <div class="mt-4 flex justify-center md:mt-10">
        <a href="#" class="mr-4 inline-block">
          <img src={button1} alt="App Store" class="h-10"/>
        </a>
        <a href="#" class="inline-block">
          <img src={button2} alt="Google Play" class="h-10"/>
        </a>
      </div>
    </div>
  </div>

  <footer class="bg-black  text-white pt-24 pb-12">
  <div class="container mx-auto max-w-5xl px-6">
    <div class="flex flex-wrap justify-between items-start gap-8">
      <div class="flex flex-col max-w-xs">
        <img src={logo} alt="HealMindBody Logo" class="w-32 mb-4"/>
        <p class="text-sm mb-4">Discover hundreds of guided meditations tailored to your needs and start your healing journey today.</p>
        <div class="flex space-x-4">
          <a href="#" class="text-blue-400 hover:text-blue-500 text-xl">
            <FaLinkedinIn/>
          </a>
          <a href="#" class="text-blue-600 hover:text-blue-700 text-xl">
            <FaInstagram/>
          </a>
          <a href="#" class="text-blue-600 hover:text-blue-700 text-xl">
           <FaFacebook/>
          </a>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">AI-Powered</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Information</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Terms of Service</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
  <h4 class="font-semibold mb-3">Contact Us</h4>
  <p class="flex items-center text-sm mb-2">
    <MdEmail className="w-5 h-5 mr-2 text-blue-500" /> info@healmb.com
  </p>
  <p class="flex items-center text-sm">
    <FaPhoneAlt className="w-5 h-5 mr-2 text-blue-500" /> 0688-098-123
  </p>
</div>

    </div>

    <div class="border-t border-gray-700 mt-10 pt-4 text-center text-xs">
      <p>© 2024. Heal MB All Rights Reserved</p>
    </div>
  </div>
  </footer>
</div>

    </div>
  )
}

export default Footer