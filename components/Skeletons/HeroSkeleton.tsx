

export default function HeroSkeleton(){
    return(
        <div className="w-3/5 mx-auto">
            <div className="w-80 bg-ske h-7 rounded mx-auto"></div>
            <div className="my-14">
                <div className="bg-ske h-20 mb-5 rounded mx-auto"></div>
                <div className=" w-3/5 bg-ske h-20 mb-5 rounded mx-auto"></div>
            </div>
            <div className="bg-ske h-10 mt-3 rounded mx-auto"></div>
            <div className="my-16 w-full h-18 flex justify-between items-center">
                <div className="bg-ske inline-block w-1/2 mr-2 h-16 mb-3 rounded"></div>
                <div className="bg-ske inline-block w-1/2 h-16 mb-3 rounded"></div>
            </div>
        </div>
    );
}