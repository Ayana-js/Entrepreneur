import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Information.module.css'
import app from '../../App.module.css'
import { baseUrl } from '../../api/api';
import axios from 'axios'
import { setIsFetching, setResponse } from '../../redux/reducer';
import { Link } from 'react-router-dom';

const Information = (props) => {
    const phone = localStorage.getItem('phone')
    const valueRegion = props.region ? props.region + ', ' + props.city : null
    const [response, setResponse] = useState(false)

    const onSend = () => {
        setIsFetching(true)
        axios.post(baseUrl + '/api/v1/create-order?phone=' + phone,
            {
                passportNumber: props.passport,
                oblast: props.region,
                finalAddress: props.finalRegion,
                street: props.exactAddress,
                districtCode: props.finalCode,
                businessAddress: props.region + ', ' + props.city + ', ' + props.district + ', ' + props.village + ', ' + props.exactAddress,
                email: props.email,
                taxMode: props.taxMode,
                addressType: props.addressTypeContent,
                activityName: props.activity,
                activityId: props.activityId
            })
            .then(res => {
                setResponse(res.data.succeed)
                props.addResponse(res.data)
                props.addIsFetching(false)
            })
    }

    return (
        <div className={app.pages}>
            <div className={styles.content}>
                <h2>Информация</h2>
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
                    {response ?
                        <Link to='/ind-ent/success'>
                            <button className={app.btn_light} onClick={() => onSend()}>Отправить заявку</button>
                        </Link> :
                        <Link to='/ind-ent/error'>
                            <button className={app.btn_light} onClick={() => onSend()}>Отправить заявку</button>
                        </Link>}
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

let mapStateToDispatch = (dispatch) => {
    return {
        addResponse: (text) => {
            dispatch(setResponse(text))
        },
        addIsFetching: (text) => {
            dispatch(setIsFetching(text))
        }
    }
}

const InformationContainer = connect(mapStateToProps, mapStateToDispatch)(Information)

export default InformationContainer;