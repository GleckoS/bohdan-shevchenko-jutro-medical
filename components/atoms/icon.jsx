import react from "react";

const Icon = ({ icon, classes }) => (
    <img className={'transition mb-[56px] w-fit m:max-h-[80px] m:w-auto ' + classes} src={icon} />
)

export default Icon