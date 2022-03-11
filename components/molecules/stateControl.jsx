import react from "react";
import Control from "../atoms/stateChangeButton";

const StateControl = ({ changeCurrState, wrapperClasses, textClasses }) => (
    <div className={'fixed inset-0 flex justify-between h-full ' + wrapperClasses}>
        <Control
            text={'<'}
            classes={"left-1/4 " + textClasses}
            changeCurrState={changeCurrState}
            direction='prev' />
        <Control
            text={'>'}
            classes={"right-1/4 " + textClasses}
            changeCurrState={changeCurrState}
            direction='next' />
    </div>
)

export default StateControl