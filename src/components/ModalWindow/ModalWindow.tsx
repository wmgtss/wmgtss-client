import Popup from 'reactjs-popup';
import styles from './ModalWindow.module.scss';
import './ModalWindow.css';
import { PopupProps } from 'reactjs-popup/dist/types';
import { ReactNode } from 'react';

export type ModalWindowProps = PopupProps & {
    children: ReactNode;
};

export default function ModalWindow(props: ModalWindowProps) {
    return (
        <div>
            <Popup {...props} modal nested>
                <div className={styles.modalContent}>{props.children}</div>
            </Popup>
        </div>
    );
}
