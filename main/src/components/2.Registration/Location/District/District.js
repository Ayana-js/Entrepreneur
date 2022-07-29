import React, { useEffect, useState } from 'react'
import app from '../../../../App.module.css'
import arrow from '../../../../assests/arrow.svg'
import { NavLink } from 'react-router-dom';
import district from './District.module.css';
import { connect } from 'react-redux';
import axios from 'axios';
import Preloader from '../../../../common/Preloader/Preloader';
import { setDistrict, setFinalRegion } from '../../../../redux/reducer';
import { setDistrictId, setFinalCode } from '../../../../redux/id-reducer';
import { baseUrl } from '../../../../api/api';

const District = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
                axios.post(baseUrl + `/api/v1/region`,
                {id: props.id})
                    .then(res => {
                        const info = res.data
                        setInfo(info)
                        setIsFetching(false)
                    })
    }, [])

    return (
        <>
        {isFetching? <div className={app.preload}><Preloader /> </div>: <div className={`${district.district} ${app.pages}`}>
            <div className={`${district.district_content} ${app.pages_content}`}>
                <h2>Выбрать село</h2>
                <ul className={app.title}>
                {info.map(info =>
                        <div key={info.id} onClick={() => {
                            props.addDistrict(info.name)
                            props.addDistrictId(info.id)
                            // if (info.isFinalElement)
                            // { props.addFinalId(info.id)}
                        }}>
                            {info.isFinal? <NavLink to={{
                                pathname: '/ie-register/registration'}}>
                                <li className={`${district.citys_items} ${app.items}`}
                                onClick={()=> {props.addFinalRegion(info.name)
                                                 props.addFinalCode(info.districtCode)}}>
                                    <p>{info.name}</p>
                                    <img src={arrow} alt="" />
                                </li>
                            </NavLink>: <NavLink to={{
                                pathname: '/ie-register/village'}}>
                                <li className={`${district.citys_items} ${app.items}`}>
                                    <p>{info.name}</p>
                                    <img src={arrow} alt="" />
                                </li>
                            </NavLink>}
                        </div>
                    )}
                </ul>
            </div>
        </div>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        city: state.reducer.city,
        id: state.idReducer.cityId
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addDistrict: (text) => {
            dispatch(setDistrict(text))
        },
        addDistrictId: (text) => {
            dispatch(setDistrictId(text))
        },
        addFinalRegion: (text) => {
            dispatch(setFinalRegion(text))
        },
        addFinalCode: (preload) => {
            dispatch(setFinalCode(preload))
        }
    }
}

const DistrictContainer = connect(mapStateToProps, mapStateToDispatch)(District)

export default DistrictContainer;