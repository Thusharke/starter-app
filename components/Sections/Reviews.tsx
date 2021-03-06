import ReviewSkeleton from "../Skeletons/ReviewSkeleton";
interface Props{
    content : ReviewData;
}
interface ReviewData{
    pic : string;
    post : String;
    author : String;
}
const Reviews : React.FC<Props> = ({content}) => {
    return (
        <div className="bg-white">
            {content && 
                <div className="py-12 md:py-28 w-11/12 md:w-9/12 mx-auto flex flex-wrap justify-center items-center">
                    <img src={content.pic} className="object-contain inline-block w-11/12 md:w-5/12"/>
                    <div className="w-11/12 md:w-7/12 p-2 md:p-24">
                        <div>
                            <img className="ml-1 mb-1 h-4 object-contain" src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/5f8dfe83cd4a11b333579a77_quotation-mark.png"/>
                        </div>
                        <div className="rounded text-slg text-toastColor mb-6">{content.post}</div>
                        <div className="rounded text_navColor mt-2 mb-4">{content.author}</div>
                    </div>
                </div>
            }
            {!content && <ReviewSkeleton/>}
        </div>
    );
}

export default Reviews;