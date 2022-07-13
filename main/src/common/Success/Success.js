import React from 'react';
import success from '../../assests/trophy.svg'
import app from '../../App.module.css'
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import styles from '../ErrorResponse/Error.module.css'

const Success = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader /> : <div className={styles.pages}>
                <div className={styles.pages_content}>
                    <img src={success} alt=' ' />
                    <h3>Заявка успешно отправлена</h3>
                    <p className={styles.description}>Заявка будет рассмотрена налоговым органом в течение 3 рабочих дней</p>
                    <div className={styles.footer}>
                        <a className={app.btn_light}>Закрыть</a>
                    </div>
                </div>
            </div>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.reducer.isFetching
    }
}

const SuccessContainer = connect(mapStateToProps, null)(Success)

export default SuccessContainer