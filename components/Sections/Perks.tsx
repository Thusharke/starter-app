import PerksSkeleton from "../Skeletons/PerksSkeleton";
interface Props{
    content : PerksData;
}
interface PerksData{
    perks : Perk[];
}
interface Perk{
    perk : string
}
const Perks : React.FC<Props> = ({content}) => {
    return (
        <div className="bg-white">
            {content && 
                <div className="w-9/12 mx-auto py-24">
                    <div className="text-toastColor text-sm mb-6">For companies of all sizes</div>
                    {content.perks.map((perk,index) =>{
                        if(index%2 == 0)
                            return(<div  key={index} className="mb-6 text-lg md:text-cus2 text-toastColor">{perk.perk}</div>);
                        else
                            return(<div key={index}  className="mb-6 text-lg md:text-cus2 text-navColor">{perk.perk}</div>);
                    })}
                </div>
            }
            {!content && <PerksSkeleton />}
        </div>
    );
}
export default Perks;