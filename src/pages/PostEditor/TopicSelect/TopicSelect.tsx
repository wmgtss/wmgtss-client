import { Field } from 'formik';
import { useEffect, useState } from 'react';
import TopicService, { TopicDto } from '../../../services/TopicService';
import styles from './TopicSelect.module.scss';

/**
 * Drop down list for selecting a topic
 * Topics are loaded from the API, and is set to the
 * most recently visited by default
 */
export default function TopicSelect() {
    const [topics, setTopics] = useState<TopicDto[]>([]);

    useEffect(() => {
        TopicService.getAllTopics().then((topics) => {
            setTopics(topics);
        });
    }, []);

    return (
        <Field className={styles.select} name="topicId" as="select">
            {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                    {topic.name}
                </option>
            ))}
        </Field>
    );
}
