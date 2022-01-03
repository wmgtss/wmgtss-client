import { MouseEventHandler } from 'react';
import styles from './FormButton.module.scss';

export type FormButtonProps = {
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

function FormButton(props: FormButtonProps) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default FormButton;
