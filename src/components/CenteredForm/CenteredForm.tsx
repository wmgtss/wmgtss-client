import { ReactNode } from 'react';
import styles from './CenteredForm.module.scss';
import logo from '../../static/logo.svg';

export type CenteredFormProps = {
    heading: string;
    children: ReactNode;
};

function CenteredForm(props: CenteredFormProps) {
    return (
        <div className={styles.ContentCenter}>
            <div className={styles.header}>
                <img src={logo} />
                <h2>{props.heading}</h2>
            </div>
            {props.children}
        </div>
    );
}

export default CenteredForm;
