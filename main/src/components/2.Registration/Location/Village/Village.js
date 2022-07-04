import React, { useEffect, useState } from 'react';
import app from '../../../../App.module.css'
import arrow from '../../../../assests/arrow.svg'
import { NavLink } from 'react-router-dom';
import village from './Village.module.css';
import { connect } from 'react-redux';
import axios from 'axios';
import Preloader from '../../../../common/Preloader/Preloader';
import { setFinalRegion, setVillage } from '../../../../redux/reducer';
import { setFinalCode, setVillageId } from '../../../../redux/id-reducer';
import { baseUrl } from '../../../../api/api';

const Village = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [err, setErr] = useState(false)

    useEffect(() => {
        console.log(props.id);
                axios.post(baseUrl + `/api/v1/region`,
                {id: props.id})
                    .then(res => {
                        const info = res.data
                        setInfo(info)
                        setIsFetching(false)
                    })
                    .catch(err => {setErr(err)
                        setIsFetching(false)})     
    }, []);

    if (err) {
        return <div> {err} </div>
    }

    return (
        <>
        {isFetching? <div className={app.preload}> <Preloader /> </div>:  <div className={`${village.village} ${app.pages}`}>
            <div className={`${village.village_content} ${app.pages_content}`}>
                <h2>Выбрать село</h2>
                <ul className={app.title}>
                    {info.map(info => <div key={info.id} onClick={() => 
                        {props.addVillage(info.name)
                        }}>
                        {info.isFinal ?
                            <NavLink to='/ind-ent/registration'>
                                <li className={`${village.village_items} ${app.items}`} jkey={info.id}
                                onClick={()=> {props.addFinalRegion(info.name)
                                               props.addFinalCode(info.districtCode)}}>
                                    <p>{info.name}</p>
                                    <img src={arrow} alt="" />
                                </li>
                            </NavLink> :
                            <NavLink to='/ind-ent/district'>
                                <li className={`${village.village_items} ${app.items}`} jkey={info.id}>
                                    <p>{info.name}</p>
                                    <img src={arrow} alt="" />
                                </li>
                            </NavLink>}
                    </div>)}
                </ul>
            </div>
        </div>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        district: state.reducer.district,
        id: state.idReducer.districtId
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addVillage: (text) => {
            dispatch(setVillage(text))
        },
        addVillageId: (text) => {
            dispatch(setVillageId(text))
        },
        addFinalRegion: (text) => {
            dispatch(setFinalRegion(text))
        },
        addFinalCode: (preload) => {
            dispatch(setFinalCode(preload))
        }
    }
}

const VillageContainer = connect(mapStateToProps, mapStateToDispatch)(Village)

export default VillageContainer;