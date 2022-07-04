import React from 'react';
import sheet from '../../../assests/sheet.svg';
import styles from '../MainPage.module.css';
// import MainPreloader from '../../../MainPreloader/MainPreloader';

const NoIP = () => {
    return (
        <>
                <div className={styles.no_patent}>
                    <img src={sheet} alt="" />
                    <h5>Нет заявок</h5>
                    <p>Подайте заявку на открытие ИП</p>          
            </div>
            </>
    );
};

export default NoIP;