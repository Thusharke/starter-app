import SkeletonElement from "../Skeletons/SkeletonElement";
import styles from "../../styles/skeleton.module.css";
interface Props{
    content : navDetails;
}
interface navDetails{
    NavHeader : String;
    NavLinks : Object;
}
export default function Nav(props){
    var {content} = props;
    return (
        <div className="fixed top-0 left-0 w-screen bg-bgColor z-10">
        <div className="flex container mx-auto max-w-screen-lg h-24 leading-24 text-navColor ">
            <div className="flex-1 w-1/4 flex items-center" >{content ?
                <div className="h-10 w-10"><img className="h-full" src={content[0].NavHeader} /></div> : 
                <SkeletonElement classes={styles.circle} />
            }</div>
            <div className="ml-4 flex-2 w-3/4" >
                <ul className="flex justify-evenly items-center h-full">
                    {content && content[1].NavLinks.map((link,index) => {
                        return <li className="text-base" key={index}>{link}</li>;
                    })}
                    {!content && 
                        <>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                            <li><SkeletonElement classes={styles.text}/></li>
                        </>
                    }
                </ul>
            </div>
            
        </div>
        </div>
    );
}