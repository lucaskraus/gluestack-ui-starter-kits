import { forwardRef, memo } from 'react';
import { headingStyle } from './styles';
const MappedHeading = memo(forwardRef(({ size, className, isTruncated, bold, underline, strikeThrough, sub, italic, highlight, ...props }, ref) => {
    switch (size) {
        case '5xl':
        case '4xl':
        case '3xl':
            return (<h1 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        case '2xl':
            return (<h2 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        case 'xl':
            return (<h3 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        case 'lg':
            return (<h4 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        case 'md':
            return (<h5 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        case 'sm':
        case 'xs':
            return (<h6 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
        default:
            return (<h4 className={headingStyle({
                    size,
                    isTruncated,
                    bold,
                    underline,
                    strikeThrough,
                    sub,
                    italic,
                    highlight,
                    class: className,
                })} {...props} ref={ref}/>);
    }
}));
const Heading = memo(forwardRef(({ className, size = 'lg', as: AsComp, ...props }, ref) => {
    const { isTruncated, bold, underline, strikeThrough, sub, italic, highlight, } = props;
    if (AsComp) {
        return (<AsComp className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
            })} {...props} ref={ref}/>);
    }
    return (<MappedHeading className={className} size={size} ref={ref} {...props}/>);
}));
Heading.displayName = 'Heading';
export { Heading };
