'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
    return (
        <>
            <div className="mt-6">
                <h1 className="mt-4 mb-7 text-6xl font-semibold xl:text-4xl lg:text-3xl text-center text-primary">My Services</h1>
            </div>
            <div className="max-w-[1440px] w-full flex flex-col items-center justify-center mt-7 min-lg:px-[60px] lg:px-[60px] sm:px-[40px]">
                <div className="w-full">
                    <div className="w-full flex items-start justify-start my-6">
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                        <div className="ml-3">
                            <h4 className="text-xl font-medium md:text-[18px]">Illustration & Animation</h4>
                            <p className="sm:text-[14px] sm:mb-3">Crafting compelling visual stories and dynamic animations that bring ideas to life.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-start justify-end my-6">
                        <div className="mr-3 text-right">
                            <h4 className="text-xl font-medium md:text-[18px]">Web Design</h4>
                            <p className="sm:text-[14px] sm:mb-3">Designing visually stunning and user-friendly websites tailored to your brands identity.</p>
                        </div>
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                    </div>
                    <div className="w-full flex items-start justify-start my-6">
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                        <div className="ml-3">
                            <h4 className="text-xl font-medium md:text-[18px]">Web Development</h4>
                            <p className="sm:text-[14px] sm:mb-3">Building robust, responsive, and scalable websites with a focus on performance and user experience.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-start justify-end my-6">
                        <div className="mr-3 text-right">
                            <h4 className="text-xl font-medium md:text-[18px]">Cross-Platform Mobile App Development</h4>
                            <p className="sm:text-[14px] sm:mb-3">Creating mobile apps that work seamlessly across both iOS and Android platforms, providing a smooth user experience.</p>
                        </div>
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                    </div>
                    <div className="w-full flex items-start justify-start my-6">
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                        <div className="ml-3">
                            <h4 className="text-xl font-medium md:text-[18px]">Web Application Development</h4>
                            <p className="sm:text-[14px] sm:mb-3">Developing custom web applications that meet your unique business needs and drive growth.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-start justify-end my-6">
                        <div className="mr-3 text-right">
                            <h4 className="text-xl font-medium md:text-[18px]">Desktop Application Development</h4>
                            <p className="sm:text-[14px] sm:mb-3">Designing and building desktop applications that deliver powerful functionality and performance.</p>
                        </div>
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                    </div>
                    <div className="w-full flex items-start justify-start my-6">
                        <span className="relative flex h-5 w-5 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-primary text-secondary"></span>
                        </span>
                        <div className="ml-3">
                            <h4 className="text-xl font-medium md:text-[18px]">Server-Side Application Development</h4>
                            <p className="sm:text-[14px] sm:mb-3">Creating efficient and scalable server-side applications and APIs using Node.js, tailored for optimal performance and integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}