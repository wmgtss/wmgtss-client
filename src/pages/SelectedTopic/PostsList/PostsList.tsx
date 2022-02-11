import styles from './PostsList.module.scss';
import ListedPost from '../ListedPost/ListedPost';
import { PostDto } from '../../../services/PostService';
export type PostListProps = {
    posts: PostDto[] | undefined;
};

export default function PostsList(props: PostListProps) {
    return (
        <div className={styles.container}>
            <div className={styles.postsEnclosed}>
                {props.posts?.map((p) => (
                    <div className={styles.post} key={p.id}>
                        <ListedPost post={p} />
                    </div>
                ))}
            </div>
        </div>
    );
}
