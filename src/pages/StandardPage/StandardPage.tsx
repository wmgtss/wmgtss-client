import styles from './StandardPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ReactNode } from 'react';
import Banner from '../../components/Banner/Banner';

type StandardPageProps = {
    children?: ReactNode;
};

export default function StandardPage(props: StandardPageProps) {
    return (
        <div className={styles.container}>
            <Banner />
            <NavBar />
            <div className={styles.content}>
                <div className={styles.children}>{props.children}</div>
                <Sidebar />
            </div>
        </div>
    );
}
