import React from "react";
import logo from '../../assests/logo.svg'
import mbank from '../../assests/logo-mbank.svg'
import styles from './MainPreloader.module.css'

const MainPreloader = () => {
    return (
        <div className={styles.wrap_preloader}>
            <div className={styles.preload}>
                <div className={styles.loader_block}>
                    <div className={styles.main_loader}></div>
                </div>
                <div className={styles.preload__content}>
                    <div className={styles.logo}>
                        <img src={logo} alt=""/>
                        <div className={styles.plus}>+</div>
                        <img src={mbank} alt=""/>
                    </div>
                    <div>
                    <p>Разработано совместно с <br/> <strong>Государственной Налоговой Службой Кыргызской Республики
                      </strong> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPreloader