import ExtraBenifitsSkeleton from "../Skeletons/ExtraBenifitsSkeleton";
import MainFeature from "../MainFeature";
import Logos from "../Logos"
interface props{
    content : ExtraBenefitsDetails;
}
interface ExtraBenefitsDetails{
    headLine1 : String;
    tagline1 : String;
    pic1 : String;
    card1_1 : Object;
    card1_2 : Object;

    headLine2 : String;
    tagline2 : String;
    pic2 : String;
    card2_1 : Object;
    card2_2 : Object;

    subHead : String;
    subTag : String;
    logos : Object;

    headLine3 : String;
    tagline3 : String;
    pic3 : String;
    card3_1 : Object;
    card3_2 : Object;
}
export default function ExtraBenifits(props){
    var {content} = props;
    return (
        <div>
                {content && <>
                    <MainFeature 
                        headLine = {content.headLine1}
                        tagline = {content.tagline1}
                        pic = {content.pic1}
                        card_1 = {content.card1_1}
                        card_2 = {content.card1_2}
                    />
            
                    <div className="bg-white">
                        <MainFeature 
                            headLine = {content.headLine2}
                            tagline = {content.tagline2}
                            pic = {content.pic2}
                            card_1 = {content.card2_1}
                            card_2 = {content.card2_2}
                        />
            
                        <div className="w-11/12 md:w-9/12 mx-auto py-32 pb-40">
                            <div className="text-lg text-toastNavcolor" >{content.subHead}</div>
                            <div className="mt-6 text-sxm text-navColor w-8/12">{content.subTag}</div>
                            <Logos logos = {content.logos}/>
                        </div>
                    </div>
            
                    <MainFeature 
                        headLine = {content.headLine3}
                        tagline = {content.tagline3}
                        pic = {content.pic3}
                        card_1 = {content.card3_1}
                        card_2 = {content.card3_2}
                    />
                </>
                }
                {!content && <ExtraBenifitsSkeleton />}
        </div>
    );
}