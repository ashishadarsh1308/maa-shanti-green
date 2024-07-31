import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="bg-white dark:bg-white-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <img src="/assets/logo-demo.png" className="rounded-full" alt="Flowbite Logo" />
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
                            Maa Shanti Green Earth <br /> Private Limited
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
                            Healthy planet, happy customers. <br />Partner with Shanti Green for <br />sustainable success
                        </p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="Phone mockup" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
