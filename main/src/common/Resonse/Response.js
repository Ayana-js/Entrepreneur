import React from 'react';
import { connect } from 'react-redux';
import ErrorResponseContainer from '../ErrorResponse/ErrorResponse';
import Preloader from '../Preloader/Preloader';
import SuccessContainer from '../Success/Success';
import app from '../../App.module.css'

const Response = (props) => {
    return (
        <div className={app.preload_page}>
            {props.isFetching? <Preloader /> :<>{props.response.succeed? <SuccessContainer />: <ErrorResponseContainer />} </> }
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        response: state.reducer.response,
        isFetching: state.reducer.isFetching
    }
}

const ResponseContainer = connect(mapStateToProps, null)(Response)

export default ResponseContainer;