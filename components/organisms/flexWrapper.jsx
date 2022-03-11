import TextPart from "../molecules/textPart";

const FlexWrapper = (props) => (
    <div className="bg-emerald-400">
        <div className="max-w-screen-xl ">
            <TextPart
                {...props}
                linkClasses=''
                textClasses=''
                titleClasses=''
                iconClasses=''
                wrapperClasses=''
            />
        </div>
    </div>
)

export default FlexWrapper
