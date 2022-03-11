import react from "react";

const Icon = ({ icon, classes }) => (
    <img className={'transition pb-[56px] w-fit ' + classes} src={icon} />
)

export default Icon