import react from "react";

const Paragraph = ({ text, classes }) => (
    <p className={'transition pb-[40px] selection:font-bold text-2xl m:text-[clamp(16px,_3.3vw,_24px)] m:leading-[clamp(24px,_4.3vw,_42px)] ' + classes}>
        {text}
    </p>
)

export default Paragraph