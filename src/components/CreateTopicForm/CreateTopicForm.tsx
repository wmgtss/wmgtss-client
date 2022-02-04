import styles from './CreateTopicForm.module.scss';
import TextField from '../TextField/TextField';
import FormButton from '../FormButton/FormButton';
import { Form, Formik, FormikErrors } from 'formik';
import { useState } from 'react';
import TopicService, { CreateTopicDto } from '../../services/TopicService';

export type CreateTopicFormProps = {
    onSubmit?: () => void;
};

function CreateTopicForm(props: CreateTopicFormProps) {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values: CreateTopicDto) => {
        const errors: FormikErrors<CreateTopicDto> = {};

        if (!values.name) errors.name = 'Required';
        if (!values.description) errors.description = 'Required';

        return errors;
    };

    const submit = (values: CreateTopicDto) => {
        setIsSubmitting(true);
        TopicService.createTopic(values)
            .then(() => {
                setIsSubmitting(false);
                if (props.onSubmit) props.onSubmit();
            })
            .catch((error) => {
                setIsSubmitting(false);
                if (!error.response) {
                    setError('Server unavailable');
                } else setError('An unknown error occurred');
            });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>New Topic</h1>
            <Formik
                initialValues={{ name: '', description: '' }}
                validate={validate}
                onSubmit={submit}
            >
                <Form className={styles.form}>
                    <p className={styles.error}>{error}</p>
                    <TextField name="name" placeholder="Name" />
                    <TextField name="description" placeholder="Description" />
                    <FormButton disabled={isSubmitting}>Create</FormButton>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateTopicForm;
