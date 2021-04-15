import CustomersShadow from "../Skeletons/CustomersShadow"
interface props{
    content : CustomerDetails;
}
interface CustomerDetails{
    headline : String;
    cust1 : String;
    cust2 : String;
    cust3 : String;
    cust4 : String;
    cust5 : String;
    cust6 : String;
}
export default function Customers(props){
    var {content} =  props;
    return (
        <div>
            {content && <div></div>}
            {!content && <CustomersShadow/>}
        </div>
        
    );
}