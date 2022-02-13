import { useAppSelector } from '../../redux/hooks';
import styles from './Banner.module.scss';

/**
 * Banner that can appear below the NavBar to indicate
 * warnings and messages. Currently not implemented anywhere.
 */
export default function Banner() {
    // Get enabled status and message from state, if there is any
    const enabled = useAppSelector((state) => state.banner.enabled);
    const message = useAppSelector((state) => state.banner.message);

    // Only display if enabled is true
    return (
        <div
            className={styles.container}
            style={enabled ? { height: '30px' } : { height: '0px' }}
        >
            {message}
        </div>
    );
}
