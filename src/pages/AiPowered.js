import React from 'react'
import gridpoweai from "../assets/Group 405.png";
import vector from "../assets/frameimg2.png";
const AiPowered = () => {
    return (
        <div id="ai-Powered" style={{ fontFamily: "'Playfair Display', serif" }} class="relative">
            <div class="min-h-screen flex flex-col lg:items-center justify-center bg-white pl-6 py-6 md:pl-12 lg:pl-24 pt-28">
                <img src={vector} alt="Meditation" class="w-64 h-96 object-cover z-100 top-0 left-0 absolute" />
                <div class="flex flex-col lg:flex-row lg:items-center md:space-x-10">
                    <div class="md:w-1/2 md:text-left xl:pl-28">
                        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl sm:text-lg md:text-3xl font-semibold text-gray-800">
                            <span className="font-extrabold sm:text-3xl  md:text-3xl">AI-Powered</span>
                            <br />
                            Healing Just for You
                        </h1>
                        <p style={{ fontFamily: "'Playfair Display', serif" }} class="mt-4 text-lg text-gray-600">
                            Our cutting-edge AI technology takes personalization to the next level. Simply input your current mood or wellness goal, and HealMindBody will create a unique meditation session designed just for you.
                        </p>
                        <button class="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600">
                            Experience AI-Optimized Meditations
                        </button>
                    </div>

                    <div class="mt-10 md:mt-0 lg:w-1/2 flex items-center justify-end">
                        <img src={gridpoweai} alt="App Screens" class="w-full max-w-lg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AiPowered