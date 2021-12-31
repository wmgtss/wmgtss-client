import styles from './TextField.module.scss';

export type TextFieldProps = {
    isPassword?: boolean;
    label?: string;
    placeholder?: string;
};

function TextField(props: TextFieldProps) {
    const type = props.isPassword ? 'password' : 'text';

    return (
        <div className={styles.TextField}>
            {props.label ? <label>{props.label}</label> : null}
            <input
                className={styles.input}
                type={type}
                placeholder={props.placeholder}
            ></input>
        </div>
    );
}

export default TextField;
