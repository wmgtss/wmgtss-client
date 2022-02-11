import styles from './ListedTopic.module.scss';
import { useNavigate } from 'react-router-dom';
import { TopicDto } from '../../../services/TopicService';
import ReactTimeAgo from 'react-time-ago';

export type ListedTopicProps = {
    topic: TopicDto;
};

export default function ListedTopic(props: ListedTopicProps) {
    const navigate = useNavigate();

    const navigateToTopic = (id: string) => {
        navigate(`/topic/${id}`);
    };

    const t = props.topic;

    return (
        <div
            className={styles.topic}
            onClick={() => {
                navigateToTopic(t.id);
            }}
        >
            <h3 className={styles.topicName}>{t.name}</h3>
            <div className={styles.details}>
                <p>By {t.authorName}</p>
                <p className={styles.updated}>
                    Updated{' '}
                    <ReactTimeAgo
                        date={Date.parse(t.updatedOn)}
                        locale="en-US"
                        future={false}
                    />
                </p>
            </div>
        </div>
    );
}
