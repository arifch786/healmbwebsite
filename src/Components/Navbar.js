import React, { useState, useRef, useEffect } from 'react';
import logo from '../../src/assets/logohmb.svg';
import { FiMenu } from 'react-icons/fi';
import { FiArrowUp } from 'react-icons/fi'; // Import the up arrow icon
import Modal from './modal';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showGoTop, setShowGoTop] = useState(false); // State for "Go to Top" button visibility
  const asideRef = useRef(null);

  const sections = ['home', 'about-Us', 'ai-Powered', 'blogs', 'testimonials'];

  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollEvent = () => {
    const scrollPosition = window.scrollY;

    // Toggle "Go to Top" button visibility
    setShowGoTop(scrollPosition > 200);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-4 lg:px-20 bg-white shadow-lg navbar">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-52 h-14" />
        </div>

        <div className="flex items-center lg:hidden">
          <a onClick={() => setIsModalOpen(true)} className="cursor-pointer mr-4 px-4 py-2 hidden sm:block text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Try For Free
          </a>
          <button onMouseDown={(e) => e.stopPropagation()} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        <div className={`hidden lg:flex space-x-6`}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleScroll(section)}
              className={`nav-link ${activeSection === section ? 'text-green-600 underline font-medium' : 'text-gray-700'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className={`hidden lg:block`}>
          <a onClick={() => setIsModalOpen(true)} className="cursor-pointer px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">Try For Free</a>
        </div>
      </nav>

      {isMenuOpen && (
        <aside ref={asideRef} className="lg:hidden fixed top-20 left-0 w-full h-50% bg-white shadow-lg z-50">
          <div className="flex flex-col p-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => {
                  handleScroll(section);
                  setIsMenuOpen(false);
                }}
                className={`nav-link ${activeSection === section ? 'text-green-600 underline font-medium' : 'text-gray-700'} my-2`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </aside>
      )}

      {showGoTop && (
        <button
          onClick={handleGoTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
          aria-label="Go to Top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Navbar;