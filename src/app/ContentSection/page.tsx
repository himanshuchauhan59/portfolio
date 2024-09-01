'use client';
import Image from "next/image"
import SliderLayout from "@/app/Component/Slider/SliderLayout";
import ProgressBar from "@/app/Component/ProgressBar/progressbar.component";
import FrontendTech from "@/app/Component/Technologys/FrontendTech.component";
import BackendTech from "@/app/Component/Technologys/BackendTech.component";
import DatabaseTech from "@/app/Component/Technologys/Database.component";
export default function ContentSection() {
    return (
        <div className="relative">
            <div className="w-screen">
                <Image src='/waves.svg' alt="waves" width={100} height={100} className="w-screen h-full" />
            </div>
            <div className="bg-primary  flex items-center justify-center">
                <div className="max-w-[1440px] py-3 min-lg:px-[60px] lg:px-[60px] sm:px-[40px]">
                    <div>
                        <h4 className="my-4 text-6xl font-semibold xl:text-4xl lg:text-3xl text-center text-secondary">About Me</h4>
                        <p className="text-lg my-4 mt-7 md:text-[14px] text-center md:text-justify text-secondary">
                            Dedicated Full Stack Developer with over 1.5 years of experience in building and maintaining web applications. Passionate about leveraging JavaScript, Node.js, Express, Angular, and React to create seamless user interfaces and robust server-side solutions. Proven ability to deliver high-quality, scalable software while embracing challenges with enthusiasm and creativity. Committed to continuously enhancing skills and exploring new technologies to drive innovation in web development.
                        </p>
                    </div>
                    <div className="flex justify-around lg:flex-col mt-[70px] lg:mt-[35px] h-full">
                        <div className="relative w-[60%] lg:w-full h-full flex items-center justify-center">
                            <Image src='/languages.svg' alt="languages" width={100} height={100} className="w-full h-auto max-w-[400px] bg-blobImage bg-cover bg-center" />
                        </div>
                        <div className="bg-secondary-one rounded-md w-[40%] px-4 py-4 ml-7 my-4 lg:w-full lg:ml-0">
                            <SliderLayout>
                                <ProgressBar />
                                <FrontendTech />
                                <BackendTech />
                                <DatabaseTech />
                            </SliderLayout>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-primary">
                <Image src='/wavesThree.svg' alt="waves" width={100} height={100} className="w-screen h-full" />
            </div>
        </div>
    )
}