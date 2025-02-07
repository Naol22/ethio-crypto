import React from 'react';

const Teams = () => {
    return (
        <section className="bg-[#03022B] dark:bg-[#03022B]"> 
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Our team</h2>
                <p className="font-light text-white sm:text-xl dark:text-white">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
            </div> 
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
                    <img className="mx-auto mb-4 w-60 h-60 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                        <a href="#">Bonnie Green</a>
                    </h3>
                    <p className="text-white">CEO/Co-founder</p>
                </div>
                <div className="text-center text-gray-300 dark:text-gray-300 mb-8 md:mb-0">
                    <img className="mx-auto mb-4 w-60 h-60 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar" />
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                        <a href="#">Helene Engels</a>
                    </h3>
                    <p className="text-white">CTO/Co-founder</p>
                </div>
                <div className="text-center text-gray-300 dark:text-gray-300">
                    <img className="mx-auto mb-4 w-60 h-60 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                        <a href="#">Jese Leos</a>
                    </h3>
                    <p className="text-white"> SEO & Marketing</p>
                </div>
            </div>  
        </div> 
    </section>
    );
}

export default Teams;
