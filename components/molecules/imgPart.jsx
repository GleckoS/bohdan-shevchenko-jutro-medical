import react from "react";
import IphoneScreen from "../atoms/iphoneScreen";

const ImgPart = ({ images, wrapperClasses, imgClasses, currStateNum }) => (
    <div className={"absolute right-0 top-[80px] min-w-[610px] 2xl:relative 2xl:mx-auto 2xl:py-[620px] 2xl:top-0 2xl:min-w-0 2xl:max-w-[610px] 2xl:w-full m:py-[500px] " + wrapperClasses} >
        <IphoneScreen img={images[0]} classes={imgClasses + (currStateNum === 1 ? ' opacity-100' : ' 2xl:hidden opacity-0')} />
        <IphoneScreen img={images[1]} classes={imgClasses + (currStateNum === 2 ? ' opacity-100' : ' 2xl:hidden opacity-0')} />
        <IphoneScreen img={images[2]} classes={imgClasses + (currStateNum === 3 ? ' opacity-100' : ' 2xl:hidden opacity-0')} />
    </div>
)

export default ImgPart