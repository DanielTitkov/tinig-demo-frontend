import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Button } from "grommet";

class RoutedLink extends React.Component {
    render() {
        const {
            to,
            "aria-label": ariaLabel,
            children,
            className,
            disabled,
            href,
            onBlur,
            onClick,
            onFocus,
        } = this.props;
        return (
            <Link
                to={to}
                aria-label={ariaLabel}
                className={className}
                disabled={disabled}
                href={href}
                onBlur={onBlur}
                onClick={onClick}
                onFocus={onFocus}
            >
                {children}
            </Link>
        );
    }
}
export const NavAnchor = (props) => <Anchor {...props} as={RoutedLink} />;

export const NavButton = ({ path, ...props }) => <Button path={path} {...props} as={RoutedLink} />;
