import react from "react";

const Icon = ({ icon, classes }) => (
    <img className={'pb-[56px] w-fit ' + classes} src={icon.src} />
)

export default Icon