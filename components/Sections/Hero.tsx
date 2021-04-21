import Mail from '../Mail';
import HeroSkeleton from '../Skeletons/HeroSkeleton';
interface Props {
   content: HeroData;
}
interface HeroData {
   toast: String;
   mainLine1: String;
   mainLine2: String;
   tagLine: String;
   placeHolder: string;
   btnTxt: String;
}
const Hero: React.FC<Props> = ({ content }) => {
   return (
      <div className="h-auto w-screen pt-28 pb-60 text-center">
         {content && (
            <div className="">
               <div className="mx-auto border border-toastbr inline-block px-4 py-2 text-xsm text-toastColor bg-bgToast">
                  {content.toast}
               </div>
               <div className="w-4/5 mx-auto my-5">
                  <h1 className="text-cus2 md:text-lgg lg:text-xl text-heroHead tracking-tightest">
                     {content.mainLine1} <br /> {content.mainLine2}
                  </h1>
               </div>
               <div className="w-12/12 lg:w-8/12 mx-auto mt-2 px-8 text-slg md:text-lg text-navColor">
                  {content.tagLine}{' '}
                  <span className="text-black">spend less.</span>
               </div>
               <div className="w-4/5 md:w-3/5 mx-auto my-16 h-18 flex flex-wrap justify-between items-center">
                  <Mail
                     placeHolder={content.placeHolder}
                     btnTxt={content.btnTxt}
                  />
               </div>
            </div>
         )}
         {!content && <HeroSkeleton />}
      </div>
   );
};

export default Hero;
