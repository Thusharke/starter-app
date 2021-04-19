import Card from "../FeatureCard";
import Stats from "../Stats";
import Demo from "../Demo";
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
    return (
        <div className="bg-white w-full h-auto">
            {content && <div className="w-full md:w-10/12  mx-auto pb-32">
                <Stats img={content[0].img} cashBack = {content[1].cashBack} savings = {content[2].savings} faster={content[3].faster}/>
                <div className="mt-12 md:mt-32">
                    <h1 className="text-lg md:text-lgg text-heroHead text-center pb-4">
                        {content[4].tagline}<br/>{content[5].changingTxt}
                    </h1>
                </div>
                <div className="flex justify-evenly mt-8 mb-8 flex-wrap">
                    <Card icon={content[6].card1[0].icon} title={content[6].card1[1].title} text={content[6].card1[2].text} />
                    <Card icon={content[7].card2[0].icon} title={content[7].card2[1].title} text={content[7].card2[2].text} />
                    <Card icon={content[8].card3[0].icon} title={content[8].card3[1].title} text={content[8].card3[2].text} />
                    <Card icon={content[9].card4[0].icon} title={content[9].card4[1].title} text={content[9].card4[2].text} />
                </div>
                <Demo playBtn = {content[10].playBtn}  playBtnTxt = {content[11].playBtnTxt}  footer = {content[12].footer} />
            </div>}
            {!content && <DetailsSkeleton/>}
        </div>
    );
}