import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../MainPage.module.css';
import QRCode from "qrcode.react";
import { connect } from 'react-redux';
import { setOrder, setReason } from '../../../redux/reducer';

const IPs = ({ info, addReason, addOrder }) => {
    return (
        <>
            {info.map(info =>
                <Link to={info.status === 'APPROVED' && 'info'} key={info.created}>
                    <div className={styles.innerBlock} onClick={() => addOrder(info)}>
                        <div className={styles.innerBlock_status}>
                            <p className={styles.status}>Статус заявки:</p>
                            {info.status === 'APPROVED' && <p className={styles.status_text}>Принят</p>}
                            {info.status === 'IN_PROGRESS' && <p className={styles.status_text_pending}> В обработке</p>}
                            {info.status === 'DENIED' && <p className={styles.status_text_declined}>Отказано</p>}
                        </div>
                        <div className={styles.innerBlock_info}>
                            <p className={styles.info_name}> Заявка ИП на:
                                <br></br>
                                <span> {info.activityName} </span> </p>
                            {info.status === 'APPROVED' && <div className={info.pdf? styles.qrcode: styles.noQrcode}>
                                <QRCode
                                    className="QRCode"
                                    id="qr-gen"
                                    value={info.pdf}
                                    style={{ width: 67, height: 67 }}
                                />
                            </div> }
                            </div>
                        <div onClick={(e) => { e.stopPropagation() }}>
                            <Link to='denialReason'>
                                <div onClick={() => addReason(info.declinedReason)}>
                                {info.status === 'DENIED' && <button className={styles.button}> Смотреть причину </button>}
                                </div>
                            </Link>
                        </div>
                    </div> </Link>)}
        </>
    );
};

let mapStateToDispatch = (dispatch) => {
    return {
        addReason: (payload) => {
            dispatch(setReason(payload))
        },
        addOrder: (payload) => {
            dispatch(setOrder(payload))
        }
    }
}

const IPsContainer = connect(null, mapStateToDispatch)(IPs)

export default IPsContainer;