interface Props{
    img : string;
    cashBack : String;
    savings : String; 
    faster : String; 
}
const Stats : React.FC<Props> = (props) => {
    return (
        <div className="relative px-4 md:px-16">
            <div className="absolute top-0 left-0 transform -translate-y-2/4 px-2 md:px-36">
                <img src={props.img} className="block"/>
            </div>
            <div className="w-1/3 mt-40 md:mt-72 inline-block text-center">
                <div className="text-cus3 text-toastColor md:text-lgg text-heroHead tracking-tightest pb-4">{props.cashBack}</div>
                <div className="text-navColor px-2">Unlimited cashback.</div>
            </div>
            <div className="w-1/3 inline-block text-center">
                <div className="text-cus3 text-toastColor md:text-lgg text-heroHead tracking-tightest pb-4">{props.savings}</div>
                <div className="text-navColor">Average annualized savings.</div>
            </div>
            <div className="w-1/3 inline-block text-center">
                <div className="text-cus3 text-toastColor md:text-lgg text-heroHead tracking-tightest pb-4">{props.faster}</div>
                <div className="text-navColor px-2">Faster end-of-month close.</div>
            </div>
        </div>
    );
}
export default Stats;