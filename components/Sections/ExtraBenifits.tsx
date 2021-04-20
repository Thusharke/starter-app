import ExtraBenifitsSkeleton from "../Skeletons/ExtraBenifitsSkeleton";
import MainFeature from "../MainFeature";
import Logos from "../Logos"
interface Props{
    content : ExtraBenefitsDetails;
}
interface ExtraBenefitsDetails{
    headLine1 : String;
    tagline1 : String;
    pic1 : string;
    cards1 : Card[];

    headLine2 : String;
    tagline2 : String;
    pic2 : string;
    cards2 : Card[];

    subHead : String;
    subTag : String;
    logos : string[];

    headLine3 : String;
    tagline3 : String;
    pic3 : string;
    cards3 : Card[];
}
interface Card{
    pic : string,
    title : String,
    text : String
}
const ExtraBenifits : React.FC<Props> = ({content}) => {
    return (
        <div>
                {content && <>
                    <MainFeature 
                        headLine = {content.headLine1}
                        tagline = {content.tagline1}
                        pic = {content.pic1}
                        cards = {content.cards1}
                    />
            
                    <div className="bg-white">
                        <MainFeature 
                            headLine = {content.headLine2}
                            tagline = {content.tagline2}
                            pic = {content.pic2}
                            cards = {content.cards2}

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
                        cards = {content.cards3}
                    />
                </>
                }
                {!content && <ExtraBenifitsSkeleton />}
        </div>
    );
}

export default ExtraBenifits;