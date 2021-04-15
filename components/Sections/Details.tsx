import Card from "../FeatureCard";
import DetailsSkeleton from "../Skeletons/DetailsSkeleleton";
interface props{
    content : DetailsData
}
interface DetailsData{
    img : String;
    cashBack : String;
    savings : String; 
    faster : String; 
    tagline : String;
    changingTxt : String; 
    card1 : CardDetiails;
    card2 : CardDetiails;
    card3 : CardDetiails;
    card4 : CardDetiails; 
    playBtn : String;
    playBtnTxt : String;
    footer : String;
}
interface CardDetiails{
    icon : String; 
    title : String;
    text : String;
}
export default function Details(props){
    var {content} = props;
    if(content) console.log(content[11].playBtnTxt)
    return (
        <div className="bg-white w-screen h-auto">
            {content && <div className="w-10/12 mx-auto pb-32">
                <div className="relative px-16">
                    <div className="absolute top-0 left-0 transform -translate-y-2/4 px-36">
                        <img src={content[0].img} className="block"/>
                    </div>
                    <div className="w-1/3 mt-72 inline-block text-center">
                        <div className="text-lgg text-heroHead tracking-tightest pb-4">{content[1].cashBack}</div>
                        <div className="text-navColor">Unlimited cashback.</div>
                    </div>
                    <div className="w-1/3 inline-block text-center">
                        <div className="text-lgg text-heroHead tracking-tightest pb-4">{content[2].savings}</div>
                        <div className="text-navColor">Average annualized savings.</div>
                    </div>
                    <div className="w-1/3 inline-block text-center">
                        <div className="text-lgg text-heroHead tracking-tightest pb-4">{content[3].faster}</div>
                        <div className="text-navColor">Faster end-of-month close.</div>
                    </div>
                </div>
                <div className="mt-32">
                    <h1 className="text-lgg text-heroHead text-center pb-4">
                        {content[4].tagline}<br/>{content[5].changingTxt}
                    </h1>
                </div>
                <div className="flex justify-evenly mt-8 mb-8 flex-wrap">
                    <Card icon={content[6].card1[0].icon} title={content[6].card1[1].title} text={content[6].card1[2].text} />
                    <Card icon={content[7].card2[0].icon} title={content[7].card2[1].title} text={content[7].card2[2].text} />
                    <Card icon={content[8].card3[0].icon} title={content[8].card3[1].title} text={content[8].card3[2].text} />
                    <Card icon={content[9].card4[0].icon} title={content[9].card4[1].title} text={content[9].card4[2].text} />
                </div>
                <div className="mt-4 shadow-detShadow py-16 border-t-8 border-strip">
                    <div className="w-2/3 mx-auto flex items-center justify-center">
                        <div className="w-1/3 mr-2">
                            <button className="rounded text-md text-white p-4 w-full h-full bg-btnColor">
                                Get Ramp - for free
                            </button>
                        </div>
                        <div className="w-1/3 ml-2">
                            <button className="rounded text-md text-black p-4 w-full h-full border-2 border-gray-300 flex items-center justify-center">
                                <img src={content[10].playBtn} className="inline-block mr-1 h-full"/>{content[11].playBtnTxt}
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-4 text-xsm">
                        <div className="text-navColor">{content[12].footer}</div>
                    </div>
                </div>
            </div>}
            {!content && <DetailsSkeleton/>}
        </div>
    );
}