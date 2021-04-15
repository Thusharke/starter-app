

export default function ReviewSkeleton(){
    return(
        <div className="py-28 bg-white flex justify-center items-center">
            <div className="h-64 rounded w-1/3 bg-ske mr-8"></div>
            <div className="w-1/3">
                <div className="h-4 rounded bg-ske mb-2"></div>
                <div className="h-4 rounded bg-ske mb-2"></div>
                <div className="h-4 rounded bg-ske mb-2"></div>
                <div className="h-3 rounded w-1/3 bg-ske mt-2 mb-4"></div>
            </div>
        </div>
    )
}