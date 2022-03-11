import react from "react";
import IphoneScreen from "../atoms/iphoneScreen";

const ImgPart = ({
    images,
    wrapperClasses,
    imgClasses,
    currStateNum
}) => (
    <div className={"absolute right-0 top-[80px] min-w-[610px] " + wrapperClasses} >
        <IphoneScreen img={currStateNum === 1 ? images[0] : images[2]} classes={imgClasses} />
        <IphoneScreen img={images[1]} classes={imgClasses} />
    </div>
)

export default ImgPart 