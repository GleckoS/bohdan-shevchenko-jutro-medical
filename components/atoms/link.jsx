import react from "react";

const Link = ({ text, classes }) => (
    <a className={'px-4 py-2 rounded-sm bg-blue-900 text-white font-semibold text-base w-fit ' + classes} href="#linkToDownload" aria-label="download app link">
        {text}
    </a>
)

export default Link