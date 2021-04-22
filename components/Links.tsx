interface Props{
    title : String,
    links : Link[]
}
interface Link{
    link : string
}
const Links : React.FC<Props> = (props) => {
    return(
        <div className="w-11/12 md:w-1/5">
            <div className="w-8/12 mb-5">{props.title}</div>
            {props.links.map((link,index) =>{
                return(<div key={index} className="mb-2 text-navColor">{link.link}</div>);
            })}
        </div>
    );
}
export default Links;
