import ImgPart from "../molecules/imgPart";
import StateControl from "../molecules/stateControl";
import TextPart from "../molecules/textPart";

const FlexWrapper = (props) => (
    <div className={"transition " + props.background + ' ' + props.organismClasses}>
        <div className="h-[1390px] max-w-[1370px] mx-auto px-[25px] relative 2xl:h-auto">
            <TextPart
                {...props}
                linkClasses={props.buttonBackground}
                textClasses={props.textColor}
                titleClasses={props.textColor}
                iconClasses=''
                wrapperClasses={props.currStateNum === 2 ? '2xl:top-[calc(100vh_-_60px)] 2xl:-translate-y-full' : '2xl:top-[60px]'}
            />
            <ImgPart
                currStateNum={props.currStateNum}
                images={props.iphoneScreens}
                wrapperClasses=''
                imgClasses=''
            />
            <StateControl
                textClasses={props.textColor}
                changeCurrState={props.changeCurrState}
                wrapperClasses=''
            />
        </div>
    </div>
)

export default FlexWrapper
