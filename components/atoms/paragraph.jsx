import react from "react";

const Paragraph = ({ text, classes }) => (
    <p className={'transition pb-[40px] selection:font-bold text-2xl ' + classes}>
        {text}
    </p>
)

export default Paragraph