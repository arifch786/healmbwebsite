import React, { useState } from 'react';
import vector from "../assets/Vector.png";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is HealMindBody?",
            answer: "HealMindBody is a wellness app offering personalized meditation and mindfulness sessions, powered by AI. We focus on helping you improve your mental, emotional, and physical well-being through guided meditations tailored to your needs."
        },
        {
            question: "How does the AI personalization work?",
            answer: "Our AI analyzes your preferences and progress to personalize your meditation experience."
        },
        {
            question: "Is HealMindBody suitable for beginners?",
            answer: "Yes, HealMindBody is suitable for all experience levels, including beginners."
        },
        {
            question: "Can I track my progress with HealMindBody?",
            answer: "Yes, you can track your progress and see improvements over time."
        },
        {
            question: "Is there a free trial available?",
            answer: "We offer a free trial so you can experience HealMindBody before subscribing."
        },
        {
            question: "What types of meditation are offered?",
            answer: "We offer a variety of meditations, including mindfulness, focus, and relaxation sessions."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach out to our support team through the app or via email."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='relative pt-16'>
            <img src={vector} alt="Meditation" className="w-64 h-96 object-cover z-100 top-0 right-0 absolute" />

            <div style={{ fontFamily: "'Playfair Display', serif" }} className="max-w-5xl mx-auto py-8">

                <div className='text-center'>
                    <button className="bg-blue-600 border-2 text-white font-medium text-lg py-2 px-4 rounded-3xl text-center shadow hover:bg-teal-700 transition duration-200">Learn More About HMB Connect</button>
                </div>
                <div className='py-32 md:text-center '>
                    <h2 className="text-3xl font-medium text-gray-800 text-center mb-8">
                        Frequently Asked <span className="text-black font-extrabold">Questions</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b">
                                <div
                                    className={`flex flex-col w-full p-4 cursor-pointer transition-colors ${activeIndex === index ? 'bg-green-50 border border-green-300 rounded-lg' : ''
                                        }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {/* Inner Flex Container */}
                                    <div className="flex flex-row justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {faq.question}
                                        </h3>
                                        <span className="text-xl font-bold text-gray-500">
                                            {activeIndex === index ? '−' : '+'}
                                        </span>
                                    </div>

                                    {/* Conditional Answer */}
                                    {activeIndex === index && (
                                        <div className="mt-4 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FAQ;
