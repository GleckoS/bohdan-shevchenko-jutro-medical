import react from "react";

const Icon = ({ icon, classes }) => (
    <img className={'pb-[56px] ' + classes} src={icon.src} />
)

export default Icon