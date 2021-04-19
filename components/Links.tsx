interface props{
    title : String,
    links : Object
}
export default function Links(props){
    return(
        <div className="w-11/12 md:w-1/5">
            <div className="w-8/12 mb-5">{props.title}</div>
            {props.links.map((link) =>{
                return(<div className="mb-2 text-navColor">{link}</div>);
            })}
        </div>
    );
}