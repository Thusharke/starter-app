
interface props{
    icon : String,
    title : String,
    text : String
}
export default function FeatureCard(props){
    return (
        <div className="w-5/12 border border-gray-200 p-8 mb-7">
            <div className="pb-4">
                <img src={props.icon} />
            </div>
            <div className="text-slg pb-4">{props.title}</div>
            <div className="text-navColor font-light text-sm">{props.text}</div>
        </div>
    );
}