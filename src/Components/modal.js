// Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData("")
        onClose();
    };

    return (
        <div style={{ fontFamily: "'Playfair Display', serif" }} id="modal" className="fixed pt-9 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-0 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-xl">
                    &times;
                </button>
                <h2 className="text-2xl font-medium mb-4 bg-gradient-to-r from-blue-800 to-blue-300 py-6 text-white text-center">
                    <span className='px-3'>Send Feedback</span>
                </h2>
                <form id="contactForm" className='px-6 py-2' onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder='Your Name'
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email address'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone :</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Your Phone Number'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
