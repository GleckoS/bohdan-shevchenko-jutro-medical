import react from "react";

const IphoneScreen = ({ img, classes }) => (
    <img className={'w-fit transition ' + classes} src={img} />
)

export default IphoneScreen