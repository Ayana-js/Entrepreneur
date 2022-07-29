import React from 'react';
import { connect } from 'react-redux';
import app from '../../../App.module.css'
import styles from '../../3. Information/Information.module.css'
import style from '../MainPage.module.css'

const Info = (props) => {
    const phone = localStorage.getItem('phone')
    return (
        <div className={app.pages}>
            <div className={styles.content}>
                <h2>Информация</h2>
                <div className={styles.content_block}>
                <div className={styles.block}>
                    <p className={styles.info}> Статус </p>
                    <p> 
                    {props.order.status === 'DENIED' && <p className={style.status_text_declined}>Отказано</p>}
                    {props.order.status === 'APPROVED' && <p className={style.status_text}>Принят</p>}
                    {props.order.status === 'IN_PROGRESS' && <p className={style.status_text_pending}> В обработке</p>}
                     </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> ИНН </p>
                    <p> {props.info.inn} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> Номер паспорта </p>
                    <p> {props.order.passportNumber} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Месторасположение деятельности   </p>
                    <p>{props.order.businessAddress} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}> Точный адрес деятельности	</p>
                    <p> {props.order.addressStreet} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Тип адреса</p>
                    <p> 
                    { props.order.addressType === 'BY_REGISTRATION' && <p>По прописке</p> } 
                    { props.order.addressType === 'BY_ACTIVITY' && <p>По месту осуществления деятельности</p>}
                    {props.order.addressType === 'PEASANT_FARMING' && <p>КФХ</p>} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Номер телефона</p>
                    <p> {phone} </p>
                </div>
               {props.order.email && <div className={styles.block}>
                    <p className={styles.info}>E-mail</p>
                    <p> {props.order.email} </p>
                </div>}
                <div className={styles.block}>
                    <p className={styles.info}>Деятельность</p>
                    <p> {props.order.activityName} </p>
                </div>
                <div className={styles.block}>
                    <p className={styles.info}>Вид налога</p>
                    <p> 
                    {props.order.taxMode === 'GENERAL' && <p> Общий налоговый режим</p>}
                    {props.order.taxMode === 'PATENT' && <p>Патент </p>}
                    {props.order.taxMode === 'MINING' && <p >Налог на майнинг</p>}
                    {props.order.taxMode === 'UNIFIED_ZERO_RATE' && <p> Единый налог с нулевой ставкой</p>}
                    {props.order.taxMode === 'UNIFIED_SPECIFIED' && <p>Единый налог для субъектов применяющих режим условного начисления НДС на импорт товаров (ст.234)</p>}
                    {props.order.taxMode === 'UNIFIED' && <p >Единый налог </p>}
                     </p>
                </div>
            </div>
            <div className={styles.footer}>
               {props.order.status === 'APPROVED' && <a href={props.order.qrUrl} className={`${app.btn} ${app.pages_title}`} download>Скачать сертификат</a>}
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        info: state.reducer.info,
        order: state.reducer.order
    }
}

const InfoContainer = connect(mapStateToProps, null)(Info)

export default InfoContainer;