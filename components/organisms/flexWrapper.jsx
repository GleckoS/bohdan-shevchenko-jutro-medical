import ImgPart from "../molecules/imgPart";
import TextPart from "../molecules/textPart";

const FlexWrapper = (props) => (
    <div className="bg-emerald-400 h-screen overflow-y-hidden">
        <div className="max-w-[1380px] mx-auto px-[32px] grid grid-cols-2 gap-24 h-full max-h-[830px]">
            <TextPart
                {...props}
                linkClasses=''
                textClasses=''
                titleClasses=''
                iconClasses=''
                wrapperClasses=''
            />
            <ImgPart
                img={props.iphoneScreen}
                wrapperClasses=''
                imgClasses=''
            />
        </div>
    </div>
)

export default FlexWrapper
