import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { baseUrl } from '../../../api/api';
import MainPageContainer from '../MainPage';
import { Link, useSearchParams } from 'react-router-dom';

const Check = () => {
    const [hasInn, setHasInn] = useState(true)
    const phone = localStorage.getItem('phone')
    const [searchParams] = useSearchParams()
    const search = searchParams.get('phone')
    localStorage.setItem('phone', search)

    useEffect(() => {
       axios( baseUrl + '/api/v1/check-user?phone=' + search)
       .then(res => setHasInn(res.data))
    }, [])

    if (hasInn) {
        return <MainPageContainer />
    } else {
        return <div>No inn</div>
    }
};

export default Check;