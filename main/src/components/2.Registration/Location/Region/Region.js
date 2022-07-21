import React, { useEffect, useState } from 'react'
import app from '../../../../App.module.css'
import arrow from '../../../../assests/arrow.svg'
import  { NavLink } from 'react-router-dom';
import region from './Region.module.css';
import { connect } from 'react-redux';
import { setRegion } from '../../../../redux/reducer';
import axios from 'axios';
import { setRegionId } from '../../../../redux/id-reducer';
import { baseUrl } from '../../../../api/api';
import Preloader from '../../../../common/Preloader/Preloader';

const Region = (props) => {
    const [info, setInfo] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
    }, [])

    useEffect(() => {
                axios.get(baseUrl + `/api/v1/region-list`)
                .then(res => {
                        const info = res.data
                        setInfo(info)
                        setIsFetching(false)
                    })
    }, []);
    
    const onAddRegion = (text) => {
        props.addRegion(text)
    }

    return (
        <>
          {isFetching? <div className={region.preload}> <Preloader /> </div> :<div className={`${region.region} ${app.pages}`}>
            <div className={`${region.region_content} ${app.pages_content}`}>
                <h2>Выбрать область</h2>
                <ul className={app.title}> 
                    <NavLink to='/ie-register/cities'>
                        <div onClick={(e) => {
                                onAddRegion(e.target.innerText)
                                }}>
                        {info.map(r => <li key={r.id} className={`${region.region_items} ${app.items}`} onClick={() => props.addRegionId(r.id)}>
                            <p>{r.name} </p>
                            <img src={arrow} alt="" />
                        </li>)}
                        </div>
                    </NavLink>
                </ul>
            </div>
        </div>}
        </>
        
    )
}

let mapStateToProps = (state) => {
    return {    
        region: state.reducer.region
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addRegion: (text) => {
            dispatch(setRegion(text))  
        },
        addRegionId: (id) => {    
            dispatch(setRegionId(id))
        }
    }
}

const RegionContainer = connect(mapStateToProps, mapStateToDispatch)(Region)

export default RegionContainer;