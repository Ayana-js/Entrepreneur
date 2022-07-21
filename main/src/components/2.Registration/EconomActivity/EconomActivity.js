import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../api/api';
import Preloader from '../../../common/Preloader/Preloader';
import styles from './EconomActivity.module.css'
import Search from './Search/Search';
import { setActivity } from '../../../redux/form-reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActivityId } from '../../../redux/id-reducer';

const EconomActivity = (props) => {
    const [info, setInfo] = useState([])
    const [err, setErr] = useState(false)
    const [isFetching, setIsFetching] = useState(true)
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        axios.get(baseUrl + `/api/v1/activities`)
            .then(res => {
                const info = res.data
                setInfo(info)
                setIsFetching(false)
            })
            .catch(err => {
                setErr(err.message)
                setIsFetching(false)
            })
    }, [])
    
    const search = val => {
        let currentItems = [], newList = [];
        if (val !== "") {
            currentItems = info;
            newList = currentItems.filter(item => {
                const lc = item.text.toLowerCase();
                const filter = val.toLowerCase();
                return lc.includes(filter);
            });
        }
        else {
            newList = info;
        }
        setFiltered(newList);
    };


    if (err) {
        return <div>{err}</div>
    }
    return (
        <div className={styles.pages}>
            {
                isFetching ? <Preloader /> :
                    <div className={styles.main_page}>
                        <h2>Экономическая деятельность</h2>
                        <Search {...{ search }} />
                            <div className={styles.content}>
                                {filtered.map(info =>
                                <Link to='/ie-register/taxes' key={info.id}>
                                    <p className={styles.text} key={info.id} onClick={(e) => {
                                        props.addActivity(e.target.innerText)
                                        props.addActivityId(info.id)}}>{info.text}
                                    </p>  </Link>)}
                            </div> 
                    </div>
            }
        </div>
    );
};

let mapStateToDispatch = (dispatch) => {
    return {
        addActivity: (preload) => {
            dispatch(setActivity(preload))
        },
        addActivityId: (preload) => {
            dispatch(setActivityId(preload))
        }
    }
}

const ActivityContainer = connect(null, mapStateToDispatch)(EconomActivity)

export default ActivityContainer;

