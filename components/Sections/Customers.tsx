import CustomersShadow from "../Skeletons/CustomersShadow"
import LogoCard from "../LogoCard";
interface props{
    content : CustomerDetails;
}
interface CustomerDetails{
    headline : String;
    customers : Object;
}
export default function Customers(props){
    var {content} =  props;
    if(content) console.log(content.customers);
    return (
        <div>
            {content && 
                <div className="w-11/12 md:w-10/12 mx-auto mt-8 md:mt-36 pb-16 md:pb-48">
                    <div>
                        <div className="px-2 md:px-8 text-lg md:text-lgg text-toastColor mb-4">{content.headline}</div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center items-center">
                        <LogoCard customers={content.customers}/>
                        <LogoCard customers={content.customers}/>
                        <LogoCard customers={content.customers}/>
                        <LogoCard customers={content.customers}/>
                    </div>
                </div>
            }
            {!content && <CustomersShadow/>}
        </div>
        
    );
}