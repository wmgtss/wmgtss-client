import styles from './Error.module.scss';

export type ErrorProps = {
    title: string;
    message: string;
};

/**
 * Generic error page, displays any title and message provided
 * So far this is only used for the 404 page.
 */
function NotFound(props: ErrorProps) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default NotFound;
