import { useEffect, useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import styles from './DashboardTopics.module.scss';
import TopicService, { TopicDto } from '../../services/TopicService';
import Button from '../Button/Button';
import ModalWindow from '../ModalWindow/ModalWindow';
import CreateTopicForm from '../CreateTopicForm/CreateTopicForm';
import { useAppSelector } from '../../redux/hooks';
import { Role } from '../../redux/slices/auth.slice';

export default function DashboardTopics() {
    const [topics, setTopics] = useState<TopicDto[]>([]);
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const closeModal = () => setCreateDialogOpen(false);
    const roles = useAppSelector((state) => state.auth.user?.roles);

    useEffect(() => {
        TopicService.getAllTopics().then((topics) => {
            setTopics(topics);
        });
    }, []);

    const refreshTopics = () => {
        TopicService.getAllTopics().then((topics) => {
            setTopics(topics);
            closeModal();
        });
    };

    const createButton = (
        <div className={styles.createButton}>
            <Button onClick={() => setCreateDialogOpen(true)}>
                Create Topic
            </Button>
            <ModalWindow
                open={createDialogOpen}
                closeOnDocumentClick
                onClose={closeModal}
            >
                <CreateTopicForm onSubmit={refreshTopics} />
            </ModalWindow>
        </div>
    );

    return (
        <div className={styles.content}>
            <h1>Discussion Topics</h1>
            <div className={styles.topics}>
                <div className={styles.topicsEnclosed}>
                    {topics.map((t) => {
                        return (
                            <div className={styles.topic} key={t.id}>
                                <h3>{t.name}</h3>
                                <div className={styles.details}>
                                    <p>By {t.authorName}</p>
                                    <p className={styles.updated}>
                                        Updated{' '}
                                        <ReactTimeAgo
                                            date={Date.parse(t.updatedOn)}
                                            locale="en-US"
                                        />
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {roles?.includes(Role.Admin) ? createButton : ''}
            </div>
        </div>
    );
}
