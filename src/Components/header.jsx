import React, { useState, useEffect } from 'react';
import flag from '../assets/Flag.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#03022B]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="px-4 lg:px-6 py-4">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    <img src={flag} className="mr-3 h-6 sm:h-9" alt="Ethio Crypto" />
                    <span className={`self-center text-xl font-semibold whitespace-nowrap text-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>
                        Ethiopia's Potential
                    </span>
                </a>
                <div className="hidden justify-end items-center w-full lg:flex lg:w-auto lg:flex-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:justify-end">
                        <li>
                            <a href="/" className={`block py-2 pr-4 pl-3 text-white lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-transform hover:-translate-y-0.5 ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/agenda" className={`block py-2 pr-4 pl-3 text-white lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-transform hover:-translate-y-0.5 ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>Agenda</a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWIA8cvHHPG8VMdolI8jvVmwmzzN1XlbVAN3boTNqro0UzXA/viewform?usp=dialog" className={`block py-2 pr-4 pl-3 text-white lg:p-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-transform hover:-translate-y-0.5 ${isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>Register</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center lg:hidden">
                    <button 
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-300 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" 
                        aria-controls="mobile-menu-2" 
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200">Home</a>
                    <a href="/agenda" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200">Agenda</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWIA8cvHHPG8VMdolI8jvVmwmzzN1XlbVAN3boTNqro0UzXA/viewform?usp=dialog" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200">Register</a>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;
