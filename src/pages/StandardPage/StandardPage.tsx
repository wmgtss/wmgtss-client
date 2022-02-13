import styles from './StandardPage.module.scss';
import NavBar from './NavBar/NavBar';
import Sidebar from './Sidebar/Sidebar';
import { ReactNode } from 'react';
import Banner from '../../components/Banner/Banner';

type StandardPageProps = {
    children?: ReactNode;
};

/**
 * The wrapper for all pages that aren't CenteredForms.
 * Puts the navbar at the top, and recent posts to the right.
 */
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
