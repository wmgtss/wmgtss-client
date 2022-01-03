import FullScreenContainer from '../../components/FullScreenContainer/FullScreenContainer';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <FullScreenContainer>
            <div className={styles.container}>
                <h1>404</h1>
                <p>Not Found</p>
            </div>
        </FullScreenContainer>
    );
}

export default NotFound;
