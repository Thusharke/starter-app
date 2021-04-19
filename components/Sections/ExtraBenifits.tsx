import ExtraBenifitsSkeleton from "../Skeletons/ExtraBenifitsSkeleton";
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
                    <div className="w-11/12 md:w-9/12 mx-auto py-12 md:py-32">
                        <div className="text-cus4 md:text-cus text-toastColor" >{content.headLine1}</div>
            
                        <div className="mt-6 w-full md:w-10/12 text-navColor text-xsm md:text-sm">{content.tagline1}</div>
            
                        <div className="mt-20">
                            <img src={content.pic1} />
                        </div>
            
                        <div className="flex flex-wrap justify-between mt-16">
                            <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                <div className="pb-4">
                                    <img src={content.card1_1[0].pic} />
                                </div>
                                <div className="text-slg pb-4">{content.card1_1[1].title}</div>
                                <div className="text-navColor font-light text-xsm md:text-sm">{content.card1_1[2].text}</div>
                            </div>
            
                            <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                <div className="pb-4">
                                    <img src={content.card1_2[0].pic} />
                                </div>
                                <div className="text-slg pb-4">{content.card1_2[1].title}</div>
                                <div className="text-navColor font-light text-xsm md:text-sm">{content.card1_2[2].text}</div>
                            </div>
                        </div>
                    </div>
            
                    <div className="bg-white">
                        <div className="w-11/12 md:w-9/12 mx-auto pt-12 md:pt-32">
                            <div className="text-cus4 md:text-cus text-toastColor" >{content.headLine2}</div>
            
                            <div className="mt-6 w-10/12 text-navColor text-xsm md:text-sm">{content.tagline2}</div>

                            <div className="mt-20">
                                <img src={content.pic2} />
                            </div>

                            <div className="flex flex-wrap justify-between mt-16">
                                <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                    <div className="pb-4">
                                        <img src={content.card2_1[0].pic} />
                                    </div>
                                    <div className="text-slg pb-4">{content.card2_1[1].title}</div>
                                    <div className="text-navColor font-light text-xsm md:text-sm">{content.card2_1[2].text}</div>
                                </div>

                                <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                    <div className="pb-4">
                                        <img src={content.card2_2[0].pic} />
                                    </div>
                                    <div className="text-slg pb-4">{content.card2_2[1].title}</div>
                                    <div className="text-navColor font-light text-xsm md:text-sm">{content.card2_2[2].text}</div>
                                </div>
                            </div>
                        </div>
            
                        <div className="w-11/12 md:w-9/12 mx-auto py-32 pb-40">
                            <div className="text-lg text-toastNavcolor" >{content.subHead}</div>
            
                            <div className="mt-6 text-sxm text-navColor w-8/12">{content.subTag}</div>
            
                            <div className="flex flex-wrap mt-16 justify-evenly items-center">
                                {content.logos.map((logo) => {
                                    return(
                                        <div className="h-44 w-5/12 md:w-2/12 border-2 mr-0 md:mr-8 mb-5 border-gray-300 py-8">
                                            <div className="w-6/12 mx-auto">
                                                <img src={logo}/>
                                            </div>
                                            <div className="w-8/12 py-1 px-2 text-navColor bg-ske1 mx-auto text-center">Learn More</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
            
                    <div className="w-11/12 md:w-9/12 mx-auto py-12 md:py-32">
                        <div className="text-cus4 md:text-cus text-toastColor" >{content.headLine3}</div>
            
                        <div className="mt-6 w-10/12 text-navColor text-xsm md:text-sm">{content.tagline3}</div>

                        <div className="mt-20">
                            <img src={content.pic3} />
                        </div>

                        <div className="flex flex-wrap justify-between mt-16">
                            <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                <div className="pb-4">
                                    <img src={content.card3_1[0].pic} />
                                </div>
                                <div className="text-slg pb-4">{content.card3_1[1].title}</div>
                                <div className="text-navColor font-light text-xsm md:text-sm">{content.card3_1[2].text}</div>
                            </div>

                            <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                                <div className="pb-4">
                                    <img src={content.card3_2[0].pic} />
                                </div>
                                <div className="text-slg pb-4">{content.card3_2[1].title}</div>
                                <div className="text-navColor font-light text-xsm md:text-sm">{content.card3_2[2].text}</div>
                            </div>
                        </div>
                    </div>
                </>
                }
                {!content && <ExtraBenifitsSkeleton />}
        </div>
    );
}