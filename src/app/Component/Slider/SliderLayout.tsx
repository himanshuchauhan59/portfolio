'use client';
import { useState } from "react";
export default function SliderLayout({ children }: any) {
    const [indexOfTab, setIndexOfTab] = useState(0);
    // console.log(children);
    return (
        <div>
            <div className="h-[300px] overflow-y-scroll">
                {
                    children[indexOfTab]
                }
            </div>
            <div className="flex items-center justify-center">
                <button className="px-3 py-1 m-2 rounded-md text-lg bg-secondary text-primary transition-all hover:bg-primary hover:text-secondary active:scale-[0.8]"
                    onClick={() => {
                        (indexOfTab !== 0) ? setIndexOfTab(indexOfTab - 1) : setIndexOfTab(0);
                    }}>
                    {'<'}
                </button>
                <button className="px-3 py-1 m-2 rounded-md text-lg bg-secondary text-primary transition-all hover:bg-primary hover:text-secondary active:scale-[0.8]"
                    onClick={() => {
                        if (indexOfTab !== children.length - 1) {
                            setIndexOfTab(indexOfTab + 1)
                        }
                        // console.log(children.length , indexOfTab);
                    }}>
                    {'>'}
                </button>
            </div>
        </div>
    )
}