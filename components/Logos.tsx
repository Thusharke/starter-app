interface props{
    logos : Object;
}

export default function Logos(props){
    return (
        <div className="flex flex-wrap mt-16 justify-evenly items-center">
            {props.logos.map((logo) => {
                return(
                    <div className="h-44 w-5/12 md:w-2/12 border-2 mr-0 md:mr-8 mb-5 border-gray-300 py-8">
                        <div className="w-6/12 mx-auto">
                            <img src={logo}/>
                        </div>
                        <div className="w-8/12 py-1 px-2 text-navColor bg-ske1 mx-auto text-center">Learn More</div>
                    </div>
                );
            })}
        </div>
    );
}