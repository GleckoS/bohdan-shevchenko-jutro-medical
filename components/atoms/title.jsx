import react from "react";

const Title = ({ text, classes }) => (
    <h1 className={'transition pb-[32px] font-bold text-5xl m:text-[clamp(24px,_6vw,_48px)] ' + classes}>
        {text}
    </h1>
)

export default Title