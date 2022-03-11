import react from "react";

const Control = ({ text, classes, changeCurrState, direction }) => (
    <button onClick={() => { changeCurrState(direction) }} className={'h-full text-5xl text-white px-8 ' + classes}>
        {text}
    </button>
)

export default Control