import { ErrorMessage, Field, FieldAttributes } from 'formik';
import styles from './TextField.module.scss';

/**
 * A Formik-compatible text entry field for entering text
 */
function TextField(props: FieldAttributes<any>) {
    return (
        <div className={styles.textField}>
            <Field className={styles.input} {...props}></Field>
            <div className={styles.error}>
                <ErrorMessage name={props.name} component="div" />
            </div>
        </div>
    );
}

export default TextField;
