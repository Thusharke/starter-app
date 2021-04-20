
interface Props{
    customers : string[]
}
const LogoCard : React.FC<Props> = (props) => {
    return (<>
        {props.customers.map((icon) => {
                return(<div className="w-cust1 md:w-cust py-8 mr-2 mb-4 rounded-lg border border-cust flex justify-center items-center">
                        <img src={icon} className="object-contain max-h-6" />
                </div>);
            })
        }
    </>);
}
export default LogoCard;