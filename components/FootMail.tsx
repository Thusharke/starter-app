
export default function FootMail(){
    return(
        <div className="w-full px-4 md:pl-0 md:w-9/12 pb-24 border-b-2 border-gray-200 mx-auto h-18 flex flex-wrap justify-start items-center">
            <div className="inline-block mx-auto md:mx-0 mr-0 md:mr-3 w-11/12 md:w-5/12 h-16 mb-3 rounded">
                <input className="border-2 border-gray-400 rounded text-md p-4 w-full h-full mr-2" placeholder="Enter your work email"/>
            </div>
            <div className="inline-block mx-auto md:mx-0 w-11/12 md:w-3/12 h-16 mb-3 rounded">
                <button className="rounded text-md text-white p-4 w-full h-full bg-btnColor">
                    Get Ramp
                </button>
            </div>
        </div>
    );
}