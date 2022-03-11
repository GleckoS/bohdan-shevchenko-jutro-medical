import ImgPart from "../molecules/imgPart";
import StateControl from "../molecules/stateControl";
import TextPart from "../molecules/textPart";

const FlexWrapper = (props) => (
    <div className={"transition " + props.background + ' ' + props.organismClasses}>
        <div className="h-[1660px] max-w-[1380px] mx-auto px-[32px] relative">
            <TextPart
                {...props}
                linkClasses={props.buttonBackground}
                textClasses={props.textColor}
                titleClasses={props.textColor}
                iconClasses=''
                wrapperClasses=''
            />
            <ImgPart
                currStateNum={props.currStateNum}
                images={props.iphoneScreens}
                wrapperClasses=''
                imgClasses=''
            />
            <StateControl
                changeCurrState={props.changeCurrState}
                wrapperClasses=''
            />
        </div>
    </div>
)

export default FlexWrapper
