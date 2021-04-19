
interface props{
    customers : Object
}
export default function LogoCard(props){
    return (<>
        {props.customers.map((icon) => {
                return(<div className="w-cust1 md:w-cust py-8 mr-2 mb-4 rounded-lg border border-cust flex justify-center items-center">
                        <img src={icon} className="object-contain max-h-6" />
                </div>);
            })
        }
    </>);
}