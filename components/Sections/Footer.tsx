import FooterSkeleton from "../Skeletons/FooterSkeleton"
import FootMail from "../FootMail";
import Banner from "../Banner";
import Links from "../Links";
import Address from "../Address";
interface Props{
  content : FooterData
}
interface FooterData{
    Address : Line[];
    colTitle : Title[];
    col1Links : Link[];
    col2Links : Link[];
    col3Links : Link[];
    bannerText : String;
    rights : String;
}
interface Line{
    line : string
}
interface Title{
    title : string
}
interface Link{
    link : string
}
const Footer : React.FC<Props>  = ({content}) => {
    return (
        <div> 
            {content && 
                <div className="py-12 md:py-28">
                    <FootMail />
                    <div className="w-9/12 mx-auto mt-24 flex flex-wrap justify-between">
                        <Address Address={content.Address} />
                        <Links title={content.colTitle[0].title} links={content.col1Links}/>
                        <Links title={content.colTitle[1].title} links={content.col2Links}/>
                        <Links title={content.colTitle[2].title} links={content.col3Links}/>
                    </div>
                    <Banner bannerText={content.bannerText} rights={content.rights}/>
                </div>
            }
            {!content && <FooterSkeleton />}
        </div>
    );
}

export default Footer;