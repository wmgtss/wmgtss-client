import { useState } from 'react';
import { Converter } from 'showdown';
import ReactMde from 'react-mde';
import styles from './MarkdownEditor.module.scss';
import './ReactMde.scss';
import { Field } from 'formik';

const converter = new Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
});

export default function MarkdownEditor() {
    const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>(
        'write',
    );

    return (
        <div className={styles.container}>
            <Field name="content" type="textarea">
                {({ field: { value }, form: { setFieldValue } }: any) => {
                    return (
                        <ReactMde
                            value={value}
                            onChange={(s) => setFieldValue('content', s)}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={(markdown) =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    );
                }}
            </Field>
        </div>
    );
}
