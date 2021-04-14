interface props{
    classes : String;
}
export default function SkeletonElement(props){
    var classes = props.classes;
    return(
        <div className={classes}></div>
    );
}