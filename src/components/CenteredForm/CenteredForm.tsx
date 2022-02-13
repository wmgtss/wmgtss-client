import { ReactNode } from 'react';
import styles from './CenteredForm.module.scss';
import logo from '../../static/logo.svg';

export type CenteredFormProps = {
    heading: string;
    subheading?: string;
    children: ReactNode;
    icon?: string;
};

/**
 * A wrapper for any form, such as login or signup
 * Places the form in the center of the screen, with a logo above
 */
function CenteredForm(props: CenteredFormProps) {
    return (
        <div className={styles.container}>
            <div className={styles.ContentCenter}>
                <div className={styles.header}>
                    <img
                        src={props.icon ? props.icon : logo}
                        alt="WMGTSS Logo"
                    />
                    <h2>{props.heading}</h2>
                    {(() => {
                        if (props.subheading) {
                            return <p>{props.subheading}</p>;
                        }
                    })()}
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default CenteredForm;
