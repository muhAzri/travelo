import cn from "classnames"

import { ReactNode, memo } from "react";
import styles from './Button.module.css'

type Props = {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    outlined?: boolean;
    onClick: () => void;
}

const Button = ({ children, className = '', fullWidth, outlined, onClick }: Props) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.fullWidth]: fullWidth,
                [styles.outlined]: outlined,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default memo(Button);