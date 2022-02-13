import styles from './Sidebar.module.scss';

/**
 * Not currently implemented - just showing placeholder data for now
 * This component should display X most recently created posts across
 * all topics.
 */
export default function Sidebar() {
    const active = [
        {
            title: 'Placeholder 1',
            author: 'Admin',
            time: '6m ago',
        },
        {
            title: 'Placeholder 2',
            author: 'User',
            time: '39m ago',
        },
        { title: 'Placeholder 3', author: 'User', time: '2h ago' },
    ];

    return (
        <div className={styles.container}>
            <h2>Active Posts</h2>
            <div className={styles.activePosts}>
                {active.map((a, i) => {
                    return (
                        <div className={styles.post} key={i}>
                            <h3>{a.title}</h3>
                            <p>{a.author}</p>
                            <p className={styles.time}>{a.time}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
