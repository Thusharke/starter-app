import CustomersShadow from '../Skeletons/CustomersShadow';
import LogoCard from '../LogoCard';
interface Props {
   content: CustomerDetails;
}
interface CustomerDetails {
   headline: String;
   customers: Logo[];
}
interface Logo{
   logo : string;
}
const Customers: React.FC<Props> = (props) => {
   var { content } = props;
   return (
      <div>
         {content && (
            <div className="w-11/12 md:w-10/12 mx-auto mt-8 md:mt-36 pb-16 md:pb-48">
               <div>
                  <div className="px-2 md:px-8 text-lg md:text-lgg text-toastColor mb-4">
                     {content.headline}
                  </div>
               </div>
               <div className="mt-8 flex flex-wrap justify-center items-center">
                     <LogoCard customers={content.customers} />
               </div>
            </div>
         )}
         {!content && <CustomersShadow />}
      </div>
   );
};

export default Customers;
