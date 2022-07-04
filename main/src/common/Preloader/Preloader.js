import React from 'react';
import styles from './Preloader.css'

const Preloader = () => {
    return (
        <div className={styles.wrap_preloader}>
            <div className={styles.preload}>
            <div className="loader-block">
                    <div className="main-loader"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;