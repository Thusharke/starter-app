import PerksSkeleton from "../Skeletons/PerksSkeleton";
interface props{
    content : PerksData;
}
interface PerksData{
    perks : Object;
}
export default function Perks(props){
    var {content} = props;
    return (
        <div className="bg-white">
            {content && 
                <div className="w-9/12 mx-auto py-24">
                    <div className="text-toastColor text-sm mb-6">For companies of all sizes</div>
                    {content.perks.map((perk,index) =>{
                        if(index%2 == 0)
                            return(<div className="mb-6 text-lg md:text-cus2 text-toastColor">{perk}</div>);
                        else
                            return(<div className="mb-6 text-lg md:text-cus2 text-navColor">{perk}</div>);
                    })}
                </div>
            }
            {!content && <PerksSkeleton />}
        </div>
    );
}