import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import vector from "../assets/Vector.png";
import { Pagination } from 'swiper/modules';

const PersonalizeMeditation = () => {
    
    const slides = [
        { image: pic1, label: "Stress Relief & Relaxation", borderColor: "border-red-400", gradientFrom: "from-red-400" },
        { image: pic2, label: "Emotional Balance", borderColor: "border-green-400", gradientFrom: "from-green-400" },
        { image: pic3, label: "Focus & Clarity", borderColor: "border-blue-400", gradientFrom: "from-blue-400" },
        { image: pic4, label: "Mindfulness & Awareness", borderColor: "border-purple-400", gradientFrom: "from-purple-400" },
    ];

    return (
        <section style={{ fontFamily: "'Playfair Display', serif" }} className="relative   pt-20">
            <img src={vector} alt="Meditation" className="w-64 h-96 object-cover z-100 top-0 right-0 absolute" />
            <div class="flex flex-col lg:items-center py-12 px-5">
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl lg:text-center font-medium text-gray-800 mb-4"><span className="font-extrabold">Personalized Meditation </span>
                    <br /> for Every Need</h1>
                <p style={{ fontFamily: "'Playfair Display', serif" }} class="text-gray-600 max-w-lg lg:text-center mb-8">
                    Whether you're a beginner or an experienced practitioner, HealMindBody provides meditations for every mood and moment. From stress relief to emotional balance, you'll find the perfect session in our vast library.
                </p>

                {/* Grid for larger screens */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {slides.map((slide, index) => (
                        <div key={index} className={`max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 ${slide.borderColor} transition-transform transform hover:scale-105 hover:shadow-xl`}>
                            <div className="relative">
                                <img src={slide.image} alt="Meditation" className="w-64 h-96 object-cover transition-transform transform hover:scale-110" />
                                <div className={`absolute bottom-0 w-full bg-gradient-to-t ${slide.gradientFrom} to-transparent p-4`}>
                                    <h2 className="text-white text-xl font-semibold text-center">{slide.label}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel for small screens */}
                <div className="lg:hidden w-full px-4">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={`max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 ${slide.borderColor}`}>
                                    <div className="relative">
                                        <img src={slide.image} alt="Meditation" className="w-full h-96 object-cover" />
                                        <div className={`absolute bottom-0 w-full bg-gradient-to-t ${slide.gradientFrom} to-transparent p-4`}>
                                            <h2 className="text-white text-xl font-semibold text-center">{slide.label}</h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PersonalizeMeditation;
