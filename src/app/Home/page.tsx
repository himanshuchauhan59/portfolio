'use client';
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function HomeSection() {
    return (
        <div className="max-w-[1440px] min-lg:px-[60px] lg:px-[60px]  sm:px-[40px]">
            <div className="flex items-start justify-between">
                <div className="mt-32 w-3/6 pr-8 lg:w-full lg:pr-0 md:mt-24">
                    <h1 className="text-primary text-6xl my-4 font-semibold xl:text-4xl lg:text-3xl">Hello I am <br /> Himanshu Chauhan</h1>
                    <div className="bg-primary px-3 py-2 rounded-lg">
                        <TypeAnimation
                            sequence={[
                                'Hello World, Hola Amigo 👋',
                                1000,
                                'Building the Universe of Code',
                                1000,
                                'Developing with Passion and Precision',
                                1000,
                                'Full Stack Solutions, Beyond the Stars',
                                1000,
                                'Crafting Code, Creating Worlds',
                                1000,
                                'From Backend to Frontend, I Explore It All',
                                1000,
                            ]}
                            speed={10}
                            className="xl:text-4xl"
                            style={{ fontSize: '1.55em' , fontWeight: 'bold', color: 'white' }}
                        repeat={Infinity}
                        />
                    </div>
                    <p className="text-lg mt-4 text-primary md:text-[14px]">
                        I am a Full Stack Developer, who loves to build amazing products and explore new technologies.
                        I am passionate about coding and love to work on challenging projects.
                        I have worked on various projects and have experience in building scalable web applications.
                    </p>
                </div>
                <div className="w-3/6 flex items-center justify-center lg:hidden">
                    <Image src='/Binary code-amico.svg' alt="Cartoon Image" width={100} height={100} className="min-w-[400px] w-full max-w-[650px]" />
                </div>
            </div>
        </div>
    )
}