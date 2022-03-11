import react from "react";

const Paragraph = ({ text, classes }) => (
    <p className={'pb-[40px] text-white font-bold text-2xl ' + classes}>
        {text}
    </p>
)

export default Paragraph