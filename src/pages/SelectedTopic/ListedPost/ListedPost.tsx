import styles from './ListedPost.module.scss';
import { useNavigate } from 'react-router-dom';
import { PostDto } from '../../../services/PostService';
import ReactTimeAgo from 'react-time-ago';

export type ListedPostProps = {
    post: PostDto;
};

export default function ListedPost(props: ListedPostProps) {
    const navigate = useNavigate();

    const navigateToPost = (id: string) => {
        navigate(`/post/${id}`);
    };

    const p = props.post;

    return (
        <div
            className={styles.post}
            onClick={() => {
                navigateToPost(p.id);
            }}
        >
            <h3 className={styles.postTitle}>{p.title}</h3>
            <div className={styles.details}>
                <p>By {p.authorName}</p>
                <p className={styles.created}>
                    Created{' '}
                    <ReactTimeAgo
                        date={Date.parse(p.createdOn)}
                        locale="en-US"
                        future={false}
                    />
                </p>
            </div>
        </div>
    );
}
