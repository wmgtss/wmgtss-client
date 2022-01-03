import { ReactNode } from 'react';
import styles from './FullScreenContainer.module.scss';

export type FullScreenContainerProps = {
    children: ReactNode;
};

function FullScreenContainer(props: FullScreenContainerProps) {
    return <div className={styles.container}>{props.children}</div>;
}

export default FullScreenContainer;
