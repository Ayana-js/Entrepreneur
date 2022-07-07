import React from 'react';
import { connect } from 'react-redux';
import app from '../../../App.module.css'
import styles from '../../3. Information/Information.module.css'

const Info = (props) => {

    const phone = localStorage.getItem('phone')
    const valueRegion = props.region ? props.region + ', ' + props.city : null
    return (
        <div className={app.pages}>
            <div className={styles.content}>
                <h2>Информация</h2>
                <div className={styles.block}>
                    <p className={styles.info}> Статус </p>
                    <p className={styles.info_content}> {props.info.inn} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> ИНН </p>
                    <p className={styles.info_content}> {props.info.inn} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> Номер паспорта </p>
                    <p className={styles.info_content}> {props.passport} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Месторасположение деятельности   </p>
                    <p className={styles.info_content}>{valueRegion} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> Точный адрес деятельности	</p>
                    <p className={styles.info_content}> {props.exactAddress} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Тип адреса</p>
                    <p className={styles.info_content}> {props.addressType} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Номер телефона</p>
                    <p className={styles.info_content}> {phone} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>E-mail</p>
                    <p className={styles.info_content}> {props.email} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Деятельность</p>
                    <p className={styles.info_content}> {props.activity} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Вид налога</p>
                    <p className={styles.info_content}> {props.tax} </p>
                </div>
                <div className={styles.footer}> 
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        info: state.reducer.info,
        passport: state.formReducer.passport,
        region: state.reducer.region,
        city: state.reducer.city,
        district: state.reducer.district,
        village: state.reducer.village,
        exactAddress: state.formReducer.exactAddress,
        addressType: state.formReducer.addressType,
        email: state.formReducer.email,
        activity: state.formReducer.activity,
        tax: state.formReducer.tax,
        finalRegion: state.reducer.finalRegion,
        taxMode: state.formReducer.taxMode,
        addressTypeContent: state.formReducer.addressTypeContent,
        activityId: state.idReducer.activityId,
        finalCode: state.idReducer.finalCode
    }
}

// let mapStateToDispatch = (dispatch) => {
//     return {
//         addResponse: (text) => {
//             dispatch(setResponse(text))
//         },
//         addIsFetching: (text) => {
//             dispatch(setIsFetching(text))
//         }
//     }
// }

const InfoContainer = connect(mapStateToProps, null)(Info)

export default InfoContainer;