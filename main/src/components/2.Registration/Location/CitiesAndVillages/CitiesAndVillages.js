import React, { useEffect, useState } from 'react'
import app from '../../../../App.module.css'
import arrow from '../../../../assests/arrow.svg'
import { NavLink } from 'react-router-dom';
import styles from './CitiesAndVillages.module.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Preloader from '../../../../common/Preloader/Preloader';
import { setCity, setFinalRegion } from '../../../../redux/reducer';
import { setCityId, setFinalCode } from '../../../../redux/id-reducer';
import { baseUrl } from '../../../../api/api';

const CitiesAndVillages = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
    }, [])

    useEffect(() => {
                axios.post(baseUrl + `/api/v1/region`, 
                {id: props.id})
                .then(res => {
                        const info = res.data
                        setInfo(info)
                        setIsFetching(false)
                    })
    }, []);

    return (<>
        {isFetching ? <div className={app.preload}> <Preloader /> </div> :
            <div className={`${styles.citys} ${app.pages}`}>
                <div className={`${styles.citys_content} ${app.pages_content}`}>
                    <h2>Выбрать город</h2>
                    <ul className={app.title}>
                        {info.map(info =>
                            <div key={info.id} onClick={(e) => {
                                props.addCity(e.target.innerText);
                                props.addCityId(info.id)
                            }}>
                                {info.isFinal ? <NavLink to='/ie-register/registration'>
                                    <li className={`${styles.citys_items} ${app.items}`} 
                                    onClick={() => {props.addFinalRegion(info.name)
                                                    props.addFinalCode(info.districtCode)}}>
                                        <p>{info.name}</p>
                                        <img src={arrow} alt="" />
                                    </li>
                                </NavLink> :
                                    <NavLink to={{
                                        pathname: '/ie-register/district'
                                    }}>
                                        <li className={`${styles.citys_items} ${app.items}`}>
                                            <p>{info.name}</p>
                                            <img src={arrow} alt="" />
                                        </li>
                                    </NavLink>}
                            </div>
                        )
                        }
                    </ul>
                </div>
            </div>
        }
    </>
    )
}

let mapStateToProps = (state) => {
    return {
        region: state.reducer.region,
        id: state.idReducer.regionId
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addCity: (preload) => {
            dispatch(setCity(preload))
        },
        addCityId: (preload) => {
            dispatch(setCityId(preload))
        },
        addFinalRegion: (preload) => {
            dispatch(setFinalRegion(preload))
        },
        addFinalCode: (preload) => {
            dispatch(setFinalCode(preload))
        }
    }
}

const CitiesContainer = connect(mapStateToProps, mapStateToDispatch)(CitiesAndVillages)

export default CitiesContainer;