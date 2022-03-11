import react from "react";
import IphoneScreen from "../atoms/iphoneScreen";

const ImgPart = ({
    images,
    wrapperClasses,
    imgClasses,
    currStateNum
}) => (
    <div className={"absolute right-0 top-[80px] min-w-[610px] 2xl:relative 2xl:mx-auto 2xl:w-fit 2xl:py-[620px] 2xl:top-0" + wrapperClasses} >
        <IphoneScreen img={currStateNum === 1 ? images[0] : images[2]} classes={imgClasses} />
        <IphoneScreen img={images[1]} classes={imgClasses} />
    </div>
)

export default ImgPart 