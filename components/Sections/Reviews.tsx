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
        <div>
            {content && <div>Review</div>}
            {!content && <ReviewSkeleton/>}
        </div>
    );
}