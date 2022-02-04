import { useAppSelector } from '../../redux/hooks';
import styles from './Banner.module.scss';

export default function Banner() {
    const enabled = useAppSelector((state) => state.banner.enabled);
    const message = useAppSelector((state) => state.banner.message);

    return (
        <div
            className={styles.container}
            style={enabled ? { height: '30px' } : { height: '0px' }}
        >
            {message}
        </div>
    );
}
