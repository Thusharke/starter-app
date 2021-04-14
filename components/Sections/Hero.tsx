import Mail from "../Mail";
import HeroSkeleton from "../Skeletons/HeroSkeleton";
interface props{
    content : HeroData;
}
interface HeroData{
    Toast : String;
    MainLine1 : String;
    MainLine2 : String;
    TagLine : String;
    PlaceHolder : String;
    BtnTxt : String;
}
export default function Hero(props){
    var {content} = props;
    return (
        <div className="h-auto w-screen pt-28 text-center">
            {content && <div className="w-3/5 mx-auto">
                <div className="border border-toastbr inline-block px-4 py-2 text-sm text-toastColor bg-bgToast">
                    {content[0].Toast}
                </div>
                <div className="my-5">
                    <h1 className="text-xl text-heroHead tracking-tightest">
                        {content[1].MainLine1} <br/> {content[2].MainLine2}
                    </h1>
                </div>
                <div className="mt-2 text-lg text-navColor">
                    {content[3].Tagline} <span className="text-black">spend less.</span>
                </div>
                <div className="my-16 w-full h-18 flex justify-between items-center">
                    <Mail placeHolder={content[4].PlaceHolder} btnTxt={content[5].BtnTxt} />
                </div>
            </div>}
            {!content && <HeroSkeleton />}
        </div>
    );
}