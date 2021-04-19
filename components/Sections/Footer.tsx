import FooterSkeleton from "../Skeletons/FooterSkeleton"
interface props{
  content : FooterData
}
interface FooterData{
    Address : Object;
    colTilte : Object;
    col1Links : Object;
    col2Links : Object;
    col3Links : Object;
    bannerText : String;
    rights : String;
}
export default function Footer(props){
    var {content} = props
    return (
        <div> 
            {content && 
                <div className="py-12 md:py-28">
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
        
                    <div className="w-9/12 mx-auto mt-24 flex flex-wrap justify-between">
                        <div className="w-11/12 md:w-2/5">
                            <div className="text-lg text-navColor w-3/5 mb-4">{content[0].Address[0]}</div>
        
                            <div className="text-xsm text-navColor w-3/5 mb-2" >{content[0].Address[1]}</div>
                            <div className="text-xsm text-navColor w-3/5 mb-2" >{content[0].Address[2]}</div>
        
                        </div>
        
                        <div className="w-11/12 md:w-1/5">
                            <div className="w-8/12 mb-5">{content[1].colTitle[0]}</div>
                            
                            {content[2].col1Links.map((link) =>{
                                return(<div className="mb-2 text-navColor">{link}</div>);
                            })}
                            
                        </div>
                        <div className="w-11/12 md:w-1/5">
                            <div className="w-8/12 mb-5">{content[1].colTitle[1]}</div>
        
                            {content[3].col2Links.map((link) =>{
                                return(<div className="mb-2 text-navColor">{link}</div>);
                            })}
                            
                        </div>
                        <div className="w-11/12 md:w-1/5">
                            <div className="w-8/12 mb-5">{content[1].colTitle[2]}</div>
        
                            {content[4].col3Links.map((link) =>{
                                return(<div className="mb-2 text-navColor">{link}</div>);
                            })}
                        </div>
                        
                    </div>
                    <div className="mt-16 w-11/12 md:w-9/12 mx-auto ">
                            <div className="py-16 text-center border-2 border-gray-300 flex justify-center items-center mb-8">
                                <div className="text-navColor text-cus3 md:text-lgg inline-block mx-auto">{content[5].bannerText}</div>
                            </div>
                            <div className="w-11/12 md:w-8/12">
                                <div className="mb-2 text-navColor text-xsm">{content[6].rights}</div>
                            </div>
                    </div>
                </div>
            }
            {!content && <FooterSkeleton />}
        </div>
    );
}