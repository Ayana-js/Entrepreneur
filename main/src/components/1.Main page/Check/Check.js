import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { baseUrl } from '../../../api/api';
import MainPageContainer from '../MainPage';
import { Link, useSearchParams } from 'react-router-dom';
import NoInnError from '../../../common/NoInnError/NoInnError';
import MainPreloader from '../../../common/MainPreloader/MainPreloader';

const Check = () => {
    const [hasInn, setHasInn] = useState(false)
    const [searchParams] = useSearchParams()
    const [isFetching, setIsFetching] = useState(true)
    const search = searchParams.get('phone')
    localStorage.setItem('phone', search)

    useEffect(() => {
       axios( baseUrl + '/api/v1/check-user?phone=' + search)
       .then(res =>{ setHasInn(res.data)
                     setIsFetching(false)})
    }, [])

    if (isFetching) {
        return <MainPreloader />
    }

    if (hasInn) {
        return <MainPageContainer />
    } else {
        return <NoInnError />
    }
};

export default Check;