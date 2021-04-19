
interface props{
    placeHolder : String;
    btnTxt : String;
}
export default function Mail(props){
    return (
        <>
            <div className="md:w-6/12 w-full h-full inline-block text-center">
                <input className="w-11/12 inline-block mx-auto border-2 border-gray-400 rounded text-md p-4 h-full mr-2 md:mr-0" placeholder={props.placeHolder}/>
            </div>
            <div className="md:w-6/12 w-full md:mt-0 mt-4 h-full inline-block text-center">
                <button className="w-11/12 inline-block mx-auto rounded text-md text-white h-full p-4 bg-btnColor">
                    {props.btnTxt}
                </button>
            </div>
        </>
    );
}