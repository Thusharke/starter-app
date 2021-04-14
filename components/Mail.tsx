
interface props{
    placeHolder : String;
    btnTxt : String;
}
export default function Mail(props){
    return (
        <>
            <div className="w-1/2 h-full inline-block">
                <input className="border-2 border-gray-400 rounded text-md p-4 w-full h-full mr-2" placeholder={props.placeHolder}/>
            </div>
            <div className="w-1/2 ml-2 h-full inline-block">
                <button className="rounded text-md text-white p-4 w-full h-full bg-btnColor">
                    {props.btnTxt}
                </button>
            </div>
        </>
    );
}