import React from 'react';
import styles from '../ErrorResponse/Error.module.css'
import error from '../../assests/error.svg'
import app from'../../App.module.css'

const NoInnError = () => {
    return (
        <div className={styles.pages}>
                <div className={styles.pages_content}>
                    <img src={error} alt=' ' />
                    <h3>Ошибка</h3>
                    <p className={styles.description}>ИНН не найден</p>
                    <div className={styles.footer}>
                        <a className={app.btn_light}>Закрыть</a>
                    </div>
                </div>
            </div>
    );
};

export default NoInnError;