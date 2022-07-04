import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../MainPage.module.css';
import QRCode from "qrcode.react";
import { connect } from 'react-redux';

const IPs = ({ info }) => {
    return (
        <>
            {info.map(info =>
                <Link to='information' key={info.created}>
                    <div className={styles.innerBlock}>
                        <div className={styles.innerBlock_status}>
                            <p className={styles.status}>Статус заявки:</p>
                            {info.status === 'APPROVED' && <p className={styles.status_text}>Принят</p>}
                            {info.status === 'IN_PROGRESS' && <p className={styles.status_text_pending}> В обработке</p>}
                            {info.status === 'DENIED' && <p className={styles.status_text_pending}>Отказано</p>}
                        </div>
                        <div className={styles.innerBlock_info}>
                            <p className={styles.info_name}> Заявка ИП на:
                                <br></br>
                                <span> Выращивание бобовых культур </span> </p>
                            {info.status === 'APPROVED' && <div className={styles.qrcode}>
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
                                {info.status === 'DENIED' && <button className={styles.button}> Смотреть причину </button>}
                            </Link>
                        </div>
                    </div> </Link>)}
            <div className={styles.buttons}>
            </div>
        </>
    );
};

// let mapStateToDispatch = (dispatch) => {
//     return {
//         addPatent: (payload) => {
//             dispatch(setPatent(payload))
//         }
//     }
// }

const IPsContainer = connect(null, null)(IPs)

export default IPsContainer;