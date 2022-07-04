import React from 'react';
import error from '../../assests/magnfier.svg'
import styles from './Error.module.css'
import app from '../../App.module.css'
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';

const ErrorResponse = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader /> : <div className={styles.pages}>
                <div className={styles.pages_content}>
                    <img src={error} alt=' ' />
                    <h3>Ошибка</h3>
                    {/* <p>{props.response.messages[0]}</p> */}
                    <span className={styles.description}>Заявка уже существует ожидайте подтверждения</span>
                    <div className={styles.footer}>
                        <button className={app.btn_light}>Закрыть</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.reducer.isFetching,
        response: state.reducer.response,
    }
}

const ErrorResponseContainer = connect(mapStateToProps, null)(ErrorResponse)

export default ErrorResponseContainer