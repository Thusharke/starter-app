import FooterSkeleton from "../Skeletons/FooterSkeleton"
import FootMail from "../FootMail";
import Banner from "../Banner";
import Links from "../Links";
import Address from "../Address";
interface props{
  content : FooterData
}
interface FooterData{
    Address : Object;
    colTilte : Object;
    col1Links : Object;
    col2Links : Object;
    col3Links : Object;
    bannerText : String;
    rights : String;
}
export default function Footer(props){
    var {content} = props
    return (
        <div> 
            {content && 
                <div className="py-12 md:py-28">
                    <FootMail />
                    <div className="w-9/12 mx-auto mt-24 flex flex-wrap justify-between">
                        <Address Address={content[0].Address} />
                        <Links title={content[1].colTitle[0]} links={content[2].col1Links}/>
                        <Links title={content[1].colTitle[1]} links={content[3].col2Links}/>
                        <Links title={content[1].colTitle[2]} links={content[4].col3Links}/>
                    </div>
                    <Banner bannerText={content[5].bannerText} rights={content[6].rights}/>
                </div>
            }
            {!content && <FooterSkeleton />}
        </div>
    );
}