import react from "react";

const Control = ({ text, classes, changeCurrState, direction }) => (
    <button
        onClick={() => { changeCurrState(direction) }}
        className={'h-full text-5xl px-8 xl:px-0 xl:w-6 xl:text-3xl ' + classes}>
        {text}
    </button>
)

export default Control