import MarkdownEditor from './MarkdownEditor/MarkdownEditor';
import TopicSelect from './TopicSelect/TopicSelect';
import styles from './PostEditor.module.scss';
import { Form, Formik } from 'formik';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import PostService, { CreatePostDto } from '../../services/PostService';
import { useNavigate } from 'react-router-dom';

/**
 * The page from which a user creates a post.
 * The name of this component could be revised.. It's not
 * so much an editor, as it is a PostCreator
 */
export default function PostEditor() {
    const navigate = useNavigate();

    function handleSubmit(values: CreatePostDto) {
        PostService.createPost(values).then((res) => {
            navigate(`/post/${res.data.id}`);
        });
    }

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    topicId: localStorage.getItem('lastTopicId'),
                }}
                onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <h1>New Post</h1>
                    <TextField
                        name="title"
                        type="text"
                        placeholder="Post Title"
                    />
                    <MarkdownEditor />
                    <TopicSelect />
                    <div className={styles.button}>
                        <Button>Submit</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
