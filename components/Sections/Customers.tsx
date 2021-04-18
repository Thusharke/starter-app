import CustomersShadow from "../Skeletons/CustomersShadow"
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
                <div className="w-10/12 mx-auto mt-36 pb-48">
                    <div>
                        <div className="px-8 text-lgg text-toastColor mb-4">{content.headline}</div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center items-center">
                        {content.customers.map((icon) => {
                                return(<div className="w-cust py-8 mr-4 mb-4 rounded-lg border border-cust flex justify-center items-center">
                                        <img src={icon} className="object-contain max-h-6" />
                                </div>);
                            })
                        }
                        {content.customers.map((icon) => {
                                return(<div className="w-cust py-8 mr-4 mb-4 rounded-lg border border-cust flex justify-center items-center">
                                        <img src={icon} className="object-contain max-h-6" />
                                </div>);
                            })
                        }
                        {content.customers.map((icon) => {
                                return(<div className="w-cust py-8 mr-4 mb-4 rounded-lg border border-cust flex justify-center items-center">
                                        <img src={icon} className="object-contain max-h-6" />
                                </div>);
                            })
                        }
                        {content.customers.map((icon) => {
                                return(<div className="w-cust py-8 mr-4 mb-4 rounded-lg border border-cust flex justify-center items-center">
                                        <img src={icon} className="object-contain max-h-6" />
                                </div>);
                            })
                        }
                    </div>
                </div>
            }
            {!content && <CustomersShadow/>}
        </div>
        
    );
}