import styles from './FormButton.module.scss';

export type FormButtonProps = {
    children: string;
};

function FormButton(props: FormButtonProps) {
    return <button className={styles.button}>{props.children}</button>;
}

export default FormButton;
