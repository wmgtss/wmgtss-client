import styles from './TextField.module.scss';

export type TextFieldProps = {
    isPassword?: boolean;
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
                onChange={props.onChange}
            ></input>
        </div>
    );
}

export default TextField;
