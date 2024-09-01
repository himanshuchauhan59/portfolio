export default function FrontendTech() {
    return (
        <>
            <div>
                <h4 className="text-xl font-semibold text-secondary">Frontend Technologies</h4>
                <p className="text-lg mb-4 mt-1 md:text-[14px] md:text-justify text-secondary">I have expertise in the following technologies Like</p>
                <ul className="flex sm:flex-col items-start list-disc sm:justify-start">
                    <div className="ml-4 mr-7">
                        <li className="md:text-[14px] text-secondary">HTML</li>
                        <li className="md:text-[14px] text-secondary">CSS</li>
                        <li className="md:text-[14px] text-secondary">JavaScript</li>
                        <li className="md:text-[14px] text-secondary">jQuery</li>
                        <li className="md:text-[14px] text-secondary">Bootstrap</li>
                    </div>
                    <div className="ml-7 sm:ml-4">
                        <li className="md:text-[14px] text-secondary">Tailwind CSS</li>
                        <li className="md:text-[14px] text-secondary">Materialize CSS</li>
                        <li className="md:text-[14px] text-secondary">Anime.js (For Animation Works)</li>
                        <li className="md:text-[14px] text-secondary">Chart.js</li>
                        <li className="md:text-[14px] text-secondary">MUI</li>
                    </div>
                </ul>
            </div>
        </>
    );
}