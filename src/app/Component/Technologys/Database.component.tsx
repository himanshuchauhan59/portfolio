export default function DatabaseTech() {
    return (
        <>
            <div>
                <h4 className="text-xl font-semibold text-secondary">In Database</h4>
                <p className="text-lg mb-4 mt-1 md:text-[14px] md:text-justify text-secondary">I have expertise in the following Database</p>
                <ul className="flex sm:flex-col items-start list-disc sm:justify-start">
                    <div className="ml-4 mr-7">
                        <li className="text-secondary md:text-[14px]">SQL</li>
                        <li className="text-secondary md:text-[14px]">SQLite</li>
                        <li className="text-secondary md:text-[14px]">MongoDB</li>
                        <li className="text-secondary md:text-[14px]">MySQL</li>
                    </div>
                </ul>
            </div>
            <div className="mt-2">
                <h4 className="text-xl font-semibold text-secondary">In Graphics</h4>
                <p className="text-lg mb-4 mt-1 md:text-[14px] md:text-justify text-secondary">I have worked with this tools</p>
                <ul className="flex sm:flex-col items-start list-disc sm:justify-start">
                    <div className="ml-4 mr-7">
                        <li className="text-secondary md:text-[14px]">Canva</li>
                        <li className="text-secondary md:text-[14px]">Figma</li>
                    </div>
                </ul>
            </div>
        </>
    );
}