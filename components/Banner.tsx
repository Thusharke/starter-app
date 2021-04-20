interface Props{
    bannerText : String
    rights : String
}
const Banner : React.FC<Props> = (props) => {
    return (
        <div className="mt-16 w-11/12 md:w-9/12 mx-auto ">
                <div className="py-16 text-center border-2 border-gray-300 flex justify-center items-center mb-8">
                    <div className="text-navColor text-cus3 md:text-lgg inline-block mx-auto">{props.bannerText}</div>
                </div>
                <div className="w-11/12 md:w-8/12">
                    <div className="mb-2 text-navColor text-xsm">{props.rights}</div>
                </div>
        </div>
    );
}

export default Banner;