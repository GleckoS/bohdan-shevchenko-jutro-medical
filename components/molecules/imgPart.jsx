import react from "react";
import IphoneScreen from "../atoms/iphoneScreen";

const ImgPart = ({
    img,
    wrapperClasses,
    imgClasses
}) => (
    <div className={"bg-cover bg-no-repeat mt-[80px] min-w-[610px] " + wrapperClasses} >
        <IphoneScreen img={img} classes={imgClasses} />
    </div>
)

export default ImgPart 