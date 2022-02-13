import styles from './SelectedTopic.module.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostsList from './PostsList/PostsList';
import TopicService, { TopicDto } from '../../services/TopicService';
import PostService, { PostDto } from '../../services/PostService';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Button from '../../components/Button/Button';
import { Role } from '../../redux/slices/auth.slice';

/**
 * Gets all the posts for a given topic, and displays them in a list
 * When this component loads, it sets a localStorage item called 'lastTopicId'
 * This is then referred to in the PostEditor to select it as the default
 * destination for a new post.
 */
export default function SelectedTopic() {
    const location = useLocation();
    const [topicId, setTopicId] = useState<string>();
    const [topic, setTopic] = useState<TopicDto>();
    const [posts, setPosts] = useState<PostDto[]>();
    const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = location.pathname.split('/').pop();
        if (id) {
            setTopicId(id);
            TopicService.getTopic(id)
                .then((t) => {
                    setTopic(t);
                    localStorage.setItem('lastTopicId', id);
                })
                .catch(() => {
                    navigate('/');
                });
            PostService.getPostsForTopic(id).then((p) => {
                setPosts(p);
            });
        }
    }, [dispatch, location, navigate]);

    function DeleteLink() {
        if (user?.roles.includes(Role.Admin)) {
            return (
                <p className="link" onClick={() => deleteTopic(topicId)}>
                    Delete Topic
                </p>
            );
        } else return <></>;
    }

    function deleteTopic(id: string | undefined) {
        if (id) {
            TopicService.deleteTopic(id).then(() => {
                navigate('/');
            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{topic?.name}</h1>
                <p>{topic?.description}</p>
                <DeleteLink />
            </div>
            <PostsList posts={posts} />
            <div className={styles.button}>
                <Button onClick={() => navigate('/post/new')}>New Post</Button>
            </div>
        </div>
    );
}
