'use client';
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Contact() {
    return (
        <>
            <div className="w-screen">
                <Image src='/waves.svg' alt="waves" width={100} height={100} className="w-screen h-full" />
            </div>
            <div className="w-full flex flex-col items-center justify-center min-lg:px-[60px] lg:px-[60px] sm:px-[40px] bg-primary">
                <div className="w-full flex flex-col items-center justify-center py-6">
                    <h1 className="mt-4 mb-7 text-6xl font-semibold xl:text-4xl lg:text-3xl text-center text-secondary">Good Things Happen When You Say Hello!</h1>
                    <div className="flex items-center justify-center">
                        <a className="border border-secondary text-secondary mx-2 px-4 py-3 rounded-md focus:text-primary focus:bg-secondary" href="mailto:devhimanshu59@gmail.com">Contact Me</a>
                        <a className="border border-secondary text-secondary mx-2 px-4 py-3 rounded-md focus:text-primary focus:bg-secondary" href="https://drive.google.com/file/d/1jWehzqDbX6FftrFtmk5kTJEfP2GrooV4/view" target="_blank">My Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
}