import CardShadow from "./CardShadow";

export default function DetailsSkeleton(){
    return(
        <div className="w-10/12 mx-auto pb-32">
            <div className="relative pt-72  flex justify-evenly">
                <div className="absolute top-0 h-64 w-full left-0 transform -translate-y-2/4 px-72">
                    <div className="bg-ske w-full h-full"></div>
                </div>
                <div className="w-32 inline-block text-center">
                    <div className="text-lgg h-24 text-heroHead tracking-tightest bg-ske pb-4"></div>
                    <div className="text-navColor h-4  mt-6 bg-ske"></div>
                </div>
                <div className="w-32 inline-block text-center">
                    <div className="text-lgg h-24 text-heroHead tracking-tightest bg-ske pb-4"></div>
                    <div className="text-navColor h-4  mt-6 bg-ske"></div>
                </div>
                <div className="w-32 inline-block text-center">
                    <div className="text-lgg h-24 text-heroHead tracking-tightest bg-ske pb-4"></div>
                    <div className="text-navColor h-4  mt-6 bg-ske"></div>
                </div>
            </div>
            <div className="mt-32">
                <h1 className="text-lgg mb-6 h-16 text-heroHead text-center pb-4 bg-ske">
                </h1>
                <h1 className="text-lgg w-3/4 mx-auto h-16 text-heroHead text-center pb-4 bg-ske">
                </h1>
            </div>
            <div className="flex justify-evenly mt-8 mb-8 flex-wrap">
                <CardShadow />
                <CardShadow />
                <CardShadow />
                <CardShadow />
            </div>
            <div className="mt-4 py-16 border-2 border-gray-200">
                <div className="w-2/3 mx-auto flex items-center justify-center">
                    <div className="w-1/3 h-6 bg-ske mr-2"></div>
                    <div className="w-1/3 h-6 bg-ske ml-2"></div>
                </div>
                <div className="text-center mt-4 w-3/4 mx-auto bg-ske h-4 text-xsm"></div>
            </div>
        </div>
    );
}

{/* <div className="w-10/12 mx-auto pb-32">
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div>
        <div></div>
        <div></div>
    </div>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div>
        <div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
</div> */}