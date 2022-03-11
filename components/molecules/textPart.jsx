import Icon from "../atoms/icon";
import Link from "../atoms/link";
import Paragraph from "../atoms/paragraph";
import Title from "../atoms/title";

const TextPart = ({
    title,
    text,
    linkText,
    titleClasses,
    textClasses,
    linkClasses,
    wrapperClasses,
    iconClasses,
    icon
}) => (
    <div className={'max-w-[630px] fixed top-1/4' +wrapperClasses}>
        <Icon icon={icon} classes={iconClasses}/>
        <Title text={title} classes={titleClasses} />
        <Paragraph text={text} classes={textClasses} />
        <Link text={linkText} classes={linkClasses} />
    </div>
)

export default TextPart

// display: flex;
// flex-direction: column;
// justify-content: center;

//widrh fit
