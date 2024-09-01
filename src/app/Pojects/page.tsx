'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="mt-6">
                <h1 className="mt-4 mb-7 text-6xl font-semibold xl:text-4xl lg:text-3xl text-center text-primary">Projects</h1>
            </div>
            <div className="max-w-[1440px] w-[98%] flex items-center justify-center min-lg:px-[60px] lg:px-[60px] sm:px-[40px]">
                <div className="w-full">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">Supersee</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am contribute in this project, Supersee for track users or employee activity and hours their count by their working hours and idle hours. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">Attinder</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am contribute in this project, Attinder For maintain stundents attendance and records by Schools and colleges in Google Sheets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">Examarks</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am contribute in this project, This project is same as Attinder but this will track the Students marks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">AIBE (AI Bot Eye)</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am contribute in this project, This project about detection humans fire safety detection or for getting detections in users mobiles this project</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">InRail OHS (Clients Project)</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am contribute in this project, Supersee for track users or employee activity and hours their count by their working hours and idle hours. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">License Manager</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This project for license genreating assigns to users for their applicaitons and that application need to be verified
                                            by our License. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <div className="border border-primary shadow-xl rounded-lg h-[280px] max-h-[300px] overflow-hidden">
                                    <div className="h-32 bg-primary flex items-center justify-center rounded-lg">
                                        <h3 className="text-secondary text-xl text-center font-medium md:text-xl sm:text-lg">SovenDevelopers Site <br />(Clients Project)</h3>
                                    </div>
                                    <div className="my-2 px-2">
                                        <p className="text-justify md:text-[14px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SovenDevelopers website is for clients project that contains their information about their development and their
                                            Services. </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}