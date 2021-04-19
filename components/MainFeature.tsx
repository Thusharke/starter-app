interface props{
    headLine : String;
    tagline : String;
    pic : String;
    card_1 : Object;
    card_2 : Object;
}

export default function MainFeature(props){
    return(
        <div className="w-11/12 md:w-9/12 mx-auto py-12 md:py-32">
            <div className="text-cus4 md:text-cus text-toastColor" >{props.headLine}</div>

            <div className="mt-6 w-full md:w-10/12 text-navColor text-xsm md:text-sm">{props.tagline}</div>

            <div className="mt-20">
                <img src={props.pic} />
            </div>

            <div className="flex flex-wrap justify-between mt-16">
                <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                    <div className="pb-4">
                        <img src={props.card_1[0].pic} />
                    </div>
                    <div className="text-slg pb-4">{props.card_1[1].title}</div>
                    <div className="text-navColor font-light text-xsm md:text-sm">{props.card_1[2].text}</div>
                </div>

                <div className="w-full md:w-5/12 p-2 md:p-8 mb-7">
                    <div className="pb-4">
                        <img src={props.card_2[0].pic} />
                    </div>
                    <div className="text-slg pb-4">{props.card_2[1].title}</div>
                    <div className="text-navColor font-light text-xsm md:text-sm">{props.card_2[2].text}</div>
                </div>
            </div>
        </div>
    );
}