import React from 'react';
import MIM from '../assets/partners/MIM.png';
import BitcoinBirr from '../assets/partners/bitcoinbirr.jpeg';
import Enegix from '../assets/partners/enegix.svg';
import Megawatt from '../assets/partners/megawatt.svg';
import UWBO from '../assets/partners/uwbo.png';
import BitDeer from '../assets/partners/bitdeer.svg';
import Siban from '../assets/partners/siban.png';

const Sponsors = () => {
    const partners = [
        { name: 'MIM', image: MIM },
        { name: 'Bitcoin Birr', image: BitcoinBirr },
        { name: 'Enegix', image: Enegix },
        { name: 'Megawatt', image: Megawatt },
        { name: 'UWBO', image: UWBO },
        { name: 'BitDeer', image: BitDeer },
        { name: 'Siban', image: Siban },
    ];

    return (
        <section className="bg-white dark:bg-white mt-20 mb-20">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-gray-900 md:text-4xl">Our Partners</h2>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center w-full h-full">
                            <img 
                                src={partner.image} 
                                alt={partner.name}
                                className="max-h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
