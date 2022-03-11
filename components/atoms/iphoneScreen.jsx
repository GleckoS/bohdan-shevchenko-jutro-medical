import react from "react";

const IphoneScreen = ({ img, classes }) => (
    <img className={'w-full transition-opacity 2xlm:absolute ' + classes} src={img} />
)

export default IphoneScreen