export default function ProgressBar() {
    return (
        <div className="relative">
            <div className="flex flex-col items-start justify-start my-4">
                <span className="text-secondary my-1 md:text-[14px]">Frontend Technologies</span>
                <div className="w-full rounded-2xl bg-primary border border-primary">
                    <div className="w-[78%] rounded-2xl bg-secondary md:text-[12px] text-center text-primary text-sm">78%</div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start my-4">
                <span className="text-secondary my-1 md:text-[14px]">Backend Technologies</span>
                <div className="w-full rounded-2xl bg-primary border border-primary">
                    <div className="w-[75%] rounded-2xl bg-secondary md:text-[12px] text-center text-primary text-sm">75%</div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start my-4">
                <span className="text-secondary my-1 md:text-[14px]">Databases</span>
                <div className="w-full rounded-2xl bg-primary border border-primary">
                    <div className="w-[72%] rounded-2xl bg-secondary md:text-[12px] text-center text-primary text-sm">72%</div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start my-4">
                <span className="text-secondary my-1 md:text-[14px]">Graphic Designing</span>
                <div className="w-full rounded-2xl bg-primary border border-primary">
                    <div className="w-[75%] rounded-2xl bg-secondary md:text-[12px] text-center text-primary text-sm">75%</div>
                </div>
            </div>
        </div>
    )
}