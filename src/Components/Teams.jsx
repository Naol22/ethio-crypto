import React from 'react';
import robert from '../assets/Robert_Luft.jpeg';
import kal from '../assets/Kal_Kassa.jpeg';
import luca from '../assets/Luca_Infeld.jpeg';

const Teams = () => {
    return (
        <section className="bg-[#03022B] dark:bg-[#03022B]"> 
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Our team</h2>
                    <p className="font-light text-white sm:text-xl dark:text-white">Meet our world-class industry experts, dedicated to delivering an unforgettable experience with their knowledge and passion!</p>
                </div> 
                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                    <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
                        <a href="https://www.linkedin.com/in/robluft/" className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110">
                            <img className="w-full h-full object-cover" src={robert} alt="Robert Luft" />
                        </a>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
                            <a href="#">Robert Luft</a>
                        </h3>
                        <p className="text-white">Strategist | Board Member | Entrepreneur</p>
                    </div>
                    <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
                        <a href="https://www.linkedin.com/in/kalkassa/" className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110">
                            <img className="w-full h-full object-cover" src={kal} alt="Kal Kassa" />
                        </a>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
                            <a href="#">Kal Kassa</a>
                        </h3>
                        <p className="text-white">Bitcoin Educator</p>
                    </div>
                    <div className="text-center text-gray-300 dark:text-gray-300">
                        <a href="https://www.linkedin.com/in/luca-infeld/" className="block overflow-hidden rounded-full mx-auto w-60 h-60 transform transition duration-300 hover:scale-110">
                            <img className="w-full h-full object-cover" src={luca} alt="Luca Infeld" />
                        </a>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white mt-4">
                            <a href="#">Luca Infeld</a>
                        </h3>
                        <p className="text-white">Founder & CBDO of Munich International Mining</p>
                    </div>
                </div>  
            </div> 
        </section>
    );
}

export default Teams;
