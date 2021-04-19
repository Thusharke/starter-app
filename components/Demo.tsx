interface props{
    playBtn : String;
    playBtnTxt : String;
    footer : String;
}
export default function Demo(props){
    return(
        <div className="mt-4 w-11/12 mx-auto shadow-detShadow py-16 border-t-8 border-strip">
            <div className="w-full md:w-2/3 mx-auto flex flex-wrap items-center justify-center">
                <div className="w-11/12 md:w-1/3 mr-0 md:mr-2 mb-2">
                    <button className="rounded text-md text-white p-4 w-full h-full bg-btnColor">
                        Get Ramp - for free
                    </button>
                </div>
                <div className="w-11/12 md:w-1/3 ml-0 md:ml-2 mb-2">
                    <button className="rounded text-md text-black p-4 w-full h-full border-2 border-gray-300 flex items-center justify-center">
                        <img src={props.playBtn} className="inline-block mr-1 h-full"/>{props.playBtnTxt}
                    </button>
                </div>
            </div>
            <div className="text-center mt-4 px-4 text-xsm">
                <div className="text-navColor">{props.footer}</div>
            </div>
        </div>
    );
}