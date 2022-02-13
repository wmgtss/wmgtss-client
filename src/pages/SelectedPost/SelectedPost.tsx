import styles from './SelectedPost.module.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostService, { PostDto } from '../../services/PostService';
import MarkdownView from 'react-showdown';
import { useAppSelector } from '../../redux/hooks';
import { Role } from '../../redux/slices/auth.slice';

/**
 * Gets the post from the database and renders the markdown
 * into actual HTML™
 */
export default function SelectedPost() {
    const location = useLocation();
    const [post, setPost] = useState<PostDto>();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);

    useEffect(() => {
        const id = location.pathname.split('/').pop();
        if (id) {
            PostService.getPost(id)
                .then((p) => {
                    setPost(p);
                })
                .catch(() => {
                    navigate('/');
                });
        }
    }, [location, navigate]);

    function deletePost(id: string | undefined) {
        if (id) {
            PostService.deletePost(id).then(() => {
                navigate('/');
            });
        }
    }

    function DeleteLink() {
        if (user?.roles.includes(Role.Admin) || user?.id === post?.authorId) {
            return (
                <p className="link" onClick={() => deletePost(post?.id)}>
                    Delete
                </p>
            );
        } else return <></>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{post?.title}</h1>
                <p>By {post?.authorName}</p>
                <DeleteLink />
            </div>
            <div className={styles.content}>
                {post?.content ? <MarkdownView markdown={post?.content} /> : ''}
            </div>
        </div>
    );
}
