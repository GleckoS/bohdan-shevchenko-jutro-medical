import react from "react";

const Title = ({ text, classes }) => (
    <h1 className={'pb-[32px] text-white font-bold text-5xl ' + classes}>
        {text}
    </h1>
)

export default Title