'use client';
import Image from 'next/image';
export default function Experience() {
    return (
        <div className="max-w-[1440px] relative min-lg:px-[60px] lg:px-[60px] sm:px-[40px]">
            <div>
                <h1 className="mt-4 mb-7 text-6xl font-semibold xl:text-4xl lg:text-3xl text-center text-primary">Professional Experience</h1>
            </div>
            <div className='relative flex flex-col items-center justify-between'>
                <div className='flex items-start justify-center sm:mb-5'>
                    <Image src='/footPrintLeft.svg' alt='Foot Print Image' width={100} height={100} className='w-[90px] pt-3 sm:hidden' />
                    <div className='w-[70%] flex flex-col items-start justify-start mt-2 sm:w-full'>
                        <h2 className='text-3xl font-medium my-1 md:text-xl sm:text-lg sm:text-center sm:w-full'>Software Engineer Intern</h2>
                        <h4 className='text-xl font-medium my-1 md:text-[18px] sm:text-[14px] sm:text-center sm:w-full'>En-Coder Infotech Inc </h4>
                        <p className='md:text-[14px] sm:text-center sm:w-full'>Aug 2022 - Oct 2022</p>
                        <p className='md:text-[14px] sm:text-center sm:w-full'>I started my internship at En-Coder infotech for 3 month. Learning the first step of IT and completed my HTML, CSS, JS, Bootstrap, JQuery knowledge.I am working in ASP.NET core or MVC Architecture basics.</p>
                    </div>
                </div>
                <hr className='bg-primary min-lg:w-[50%] min-lg:mr-[8%] lg:w-[40%] lg:mr-0 md:w-1/3 md:mr-0 sm:w-full sm:mr-0'/>
                <div className='flex items-start justify-center sm:mb-5'>
                    <div className='w-[70%] flex flex-col items-end justify-end mt-2 pt-10 sm:w-full sm:pt-0'>
                        <h2 className='w-full my-1 text-right text-3xl font-medium md:text-xl sm:text-lg sm:text-center sm:w-full'>Full Stack Developer</h2>
                        <h4 className='w-full my-1 text-right text-xl font-medium md:text-[18px] sm:text-[14px] sm:text-center sm:w-full'>Rao Information Technology</h4>
                        <p className='text-right w-full md:text-[14px] sm:text-center sm:w-full'>Feb 2023 - Present</p>
                        <p className='text-right md:text-[14px] sm:text-center sm:w-full'>Completed my internship and training. Learning the most of the part of IT industry and learning most of frameworks at here.</p>
                    </div>
                    <Image src='/footPrintRight.svg' alt='Foot Print Image' width={100} height={100} className='w-[90px] sm:hidden' />
                </div>
            </div>
        </div>
    )
}