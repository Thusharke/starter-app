
interface props{
    Address : Object
}
export default function Address(props){
    return(
        <div className="w-11/12 md:w-2/5">
            <div className="text-lg text-navColor w-3/5 mb-4">{props.Address[0]}</div>
            <div className="text-xsm text-navColor w-3/5 mb-2" >{props.Address[1]}</div>
            <div className="text-xsm text-navColor w-3/5 mb-2" >{props.Address[2]}</div>
        </div>
    );
}