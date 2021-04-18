import ReviewSkeleton from "../Skeletons/ReviewSkeleton";
interface props{
    content : ReviewData;
}
interface ReviewData{
    pic : String;
    post : String;
    author : String;
}
export default function Reviews(props){
    var {content} = props;
    return (
        <div className="bg-white">
            {content && 
                <div className="py-28 w-9/12 mx-auto flex justify-center items-center">
                    <img src={content.pic} className="object-contain inline-block w-5/12"/>
                    <div className="w-7/12 p-24">
                        <div>
                            <img className="ml-1 mb-1 h-4 object-contain" src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/5f8dfe83cd4a11b333579a77_quotation-mark.png"/>
                        </div>
                        <div className="rounded text-lg text-toastColor mb-6">{content.post}</div>
                        <div className="rounded text_navColor mt-2 mb-4">{content.author}</div>
                    </div>
                </div>
            }
            {!content && <ReviewSkeleton/>}
        </div>
    );
}