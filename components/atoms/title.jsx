import react from "react";

const Title = ({ text, classes }) => (
    <h1 className={'transition pb-[32px] font-bold text-5xl ' + classes}>
        {text}
    </h1>
)

export default Title