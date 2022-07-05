import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../api/api';
import styles from '../EconomActivity/EconomActivity.module.css'
import Preloader from '../../../common/Preloader/Preloader';
import { setAddressType, setAddressTypeContent } from '../../../redux/form-reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddressType = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        axios.get(baseUrl + '/api/v1/address-type')
            .then(res => {
                const info = res.data
                setInfo(info)
                setIsFetching(false)
            })
    }, []);
    const i = info.map(i => i)
    console.log(i);
    return (
        <div className={styles.pages}>
            {
                isFetching ? <Preloader /> :
                <div className={styles.main_page}>
                <h2>Тип адреса</h2>
                <div className={styles.content}>
                {info.map(info => 
                <Link to='/ie-register/registration'>
                { info === 'BY_REGISTRATION' && 
                <p className={styles.description} onClick={(e) =>{ 
                    props.addAAddressType(e.target.innerText)
                    props.addAAddressTypeContent(info)}}>По прописке</p> } 
                { info === 'BY_ACTIVITY' &&
                <p className={styles.description}  onClick={(e) => {
                    props.addAAddressType(e.target.innerText)
                    props.addAAddressTypeContent(info)}}>По месту осуществления деятельности</p>}
                {info === 'PEASANT_FARMING' && 
                <p className={styles.description}  onClick={(e) => {
                    props.addAAddressType(e.target.innerText)
                    props.addAAddressTypeContent(info)}}>КФХ</p>} 
                </Link>
                )} </div>
            </div>
                }
        </div>
    );
};

let mapStateToDispatch = (dispatch) => {
    return {
        addAAddressType: (preload) => {
            dispatch(setAddressType(preload))
        },
        addAAddressTypeContent: (preload) => {
            dispatch(setAddressTypeContent(preload))
        }
    }
}

const AddressTypeContainer = connect(null, mapStateToDispatch)(AddressType)

export default AddressTypeContainer;