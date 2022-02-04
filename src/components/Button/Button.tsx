import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={props.onClick ? props.onClick : undefined}
            disabled={props.disabled}
            type="submit"
        >
            {props.children}
        </button>
    );
}
