import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../api/api';
import axios from 'axios'
import styles from '../EconomActivity/EconomActivity.module.css'
import Preloader from '../../../common/Preloader/Preloader';
import { setTax, setTaxMode } from '../../../redux/form-reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Taxes = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        axios.get(baseUrl + '/api/v1/tax-mode')
            .then(res => {
                setInfo(res.data)
                setIsFetching(false)
            })
            .catch(err => {
                setErr(err)
                setIsFetching(false)
            })
    }, [])

    return (
        <div className={styles.pages}>
            {isFetching ? <Preloader /> :
                <div className={styles.main_page}>
                    <h2>Вид налогового режима</h2>
                    <div className={styles.content}>
                        {info.map(info =>
                            <Link to='/ie-register/information' key={info.id}>
                                {info === 'GENERAL' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                }}> Общий налоговый режим</p>}
                                {info === 'PATENT' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                }}>Патент </p>}
                                {info === 'MINING' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                }}>Налог на майнинг</p>}
                                {info === 'UNIFIED_ZERO_RATE' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                }}> Единый налог с нулевой ставкой</p>}
                                {info === 'UNIFIED_SPECIFIED' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                    }}>Единый налог для субъектов применяющих режим условного начисления НДС на импорт товаров  (ст.234) </p>}
                                {info === 'UNIFIED' && <p className={styles.description} onClick={(e) => {
                                    props.addTax(e.target.innerText)
                                    props.addTaxMode(info)
                                }}>Единый налог </p>}
                            </Link>)}
                    </div>
                </div>
            }

        </div>
    );
};

let mapStateToDispatch = (dispatch) => {
    return {
        addTax: (preload) => {
            dispatch(setTax(preload))
        },
        addTaxMode: (preload) => {
            dispatch(setTaxMode(preload))
        }
    }
}

const TaxesContainer = connect(null, mapStateToDispatch)(Taxes)

export default TaxesContainer;