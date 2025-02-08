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
        { name: 'MIM', image: MIM, link: 'https://mim.farm/en/' },
        { name: 'Bitcoin Birr', image: BitcoinBirr, link: 'https://bitcoinbirr.org/' },
        { name: 'Enegix', image: Enegix, link: 'https://www.enegix.energy/' },
        { name: 'Megawatt', image: Megawatt, link: 'https://megawatt.energy/' },
        { name: 'UWBO', image: UWBO, link: 'https://www.uwbo.com/' },
        { name: 'BitDeer', image: BitDeer, link: 'https://www.bitdeer.com/' },
        { name: 'Siban', image: Siban, link: 'https://siban.org.ng/' },
    ];

    return (
        <section className="bg-white dark:bg-white mt-20 mb-20">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-gray-900 md:text-4xl">Our Partners</h2>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center w-full h-full">
                            {/* <a href={partner.link}> */}
                                <img 
                                    src={partner.image} 
                                    alt={partner.name}
                                    className="max-h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                                />
                            {/* </a> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
