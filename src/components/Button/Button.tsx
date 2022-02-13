import { MouseEventHandler } from 'react';
import './Button.colors.scss';
import styles from './Button.module.scss';

export type ButtonProps = {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
};
/**
 * A generic button, comes in green or grey flavour
 * Possibly redundant, as FormButton does almost the same thing
 */
export default function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${
                props.type ? props.type : 'primary'
            }`}
            onClick={props.onClick ? props.onClick : undefined}
            disabled={props.disabled}
            type="submit"
        >
            {props.children}
        </button>
    );
}
