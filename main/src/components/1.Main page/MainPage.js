import React, { useState, useEffect } from 'react';
import app from '../../App.module.css'
import styles from './MainPage.module.css';
import user_icon from '../../assests/user_icon.svg';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setInfo } from '../../redux/reducer';
import MainPreloader from '../../common/MainPreloader/MainPreloader';
import NoIP from './NoIP/NoIP';
import IPsContainer from './IPs/IPs';
import { baseUrl } from '../../api/api';

function MainPage(props) {

    const [info, setInfo] = useState()
    const [searchParams] = useSearchParams()
    const search = searchParams.get('phone')
    const [isFetching, setIsFetching] = useState(true)
    const [err, setErr] = useState(false)
    const [status, setStatus] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/api/v1/order-result?phone=' + search, {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*'
        })
            .then(res => {
                setInfo(res.data)
                props.addInfo(res.data)
                localStorage.setItem('inn', res.data.inn)
                const status = res.data.orders.map(order => order.status)
                setStatus(status)
                setIsFetching(false)
            })
            .catch(() => {
                setErr(true)
                setIsFetching(false)
            })
        }, [])
    
        if (err) {
            return <div> Error </div>
        }

    return (
        <div className={`${styles.main_page} ${app.pages}`}>
        {isFetching? <MainPreloader />: 
        <div className={`${styles.main_page_content} ${app.pages_content}`}>
            <div className={`${styles.user} ${app.pages_title}`}>
                <div className={styles.user_image}>
                    <img src={user_icon} alt="" />
                </div>
                <div>
                    <span>{info.name}</span>
                    <p>ИНН: {info.inn}</p>
                </div>
            </div>
            <IPsContainer info={info.orders} />
             {!info.isHas && <NoIP />}
            <div className={styles.buttons}>
               {status[0] === 'DENIED' || !info.isHas? <Link to='/ie-register/registration' >
                    <a className={`${app.btn} ${app.pages_title}`} >Отправить заявку</a>
                </Link>: null}
            </div>
        </div>}
    </div>
    )
}

let mapStateToDispatch = (dispatch) => {
    return {
        addInfo: (payload) => {
            dispatch(setInfo(payload))
        }
    }
}

const MainPageContainer = connect(null, mapStateToDispatch)(MainPage)

export default MainPageContainer;