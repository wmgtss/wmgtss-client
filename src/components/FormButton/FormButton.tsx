import { MouseEventHandler } from 'react';
import styles from './FormButton.module.scss';

export type FormButtonProps = {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

function FormButton(props: FormButtonProps) {
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

export default FormButton;
