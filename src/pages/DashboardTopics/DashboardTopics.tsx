import { useEffect, useState } from 'react';
import styles from './DashboardTopics.module.scss';
import TopicService, { TopicDto } from '../../services/TopicService';
import Button from '../../components/Button/Button';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import CreateTopicForm from './CreateTopicForm/CreateTopicForm';
import { useAppSelector } from '../../redux/hooks';
import { Role } from '../../redux/slices/auth.slice';
import ListedTopic from './ListedTopic/ListedTopic';

/**
 * The dashboard/landing page displaying a list of all topics
 * Also contains the modal window for creating a new topic
 */
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
                    {topics.map((t) => (
                        <div className={styles.topic} key={t.id}>
                            <ListedTopic topic={t} />
                        </div>
                    ))}
                </div>
                {roles?.includes(Role.Admin) ? createButton : ''}
            </div>
        </div>
    );
}
