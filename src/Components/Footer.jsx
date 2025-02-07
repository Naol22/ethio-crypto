import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#03022B] mt-20 shadow-lg">
            <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center">
                    2025 <a href="#" className="hover:underline font-semibold">EthioCrypto</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6 hover:text-gray-300 transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6 hover:text-gray-300 transition-colors">Agenda</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWIA8cvHHPG8VMdolI8jvVmwmzzN1XlbVAN3boTNqro0UzXA/viewform?usp=dialog" 
                           className="hover:underline hover:text-gray-300 transition-colors">
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
