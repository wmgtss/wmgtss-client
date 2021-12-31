import { ReactNode } from 'react';
import styles from './FullScreenForm.module.scss';

export type FullScreenFormProps = {
    children: ReactNode;
};

function FullScreenForm(props: FullScreenFormProps) {
    return <div className={styles.container}>{props.children}</div>;
}

export default FullScreenForm;
