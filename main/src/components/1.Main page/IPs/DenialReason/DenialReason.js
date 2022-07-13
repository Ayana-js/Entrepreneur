import React from 'react';
import { connect } from 'react-redux';
import app from '../../../../App.module.css'
import styles from '../../../3. Information/Information.module.css'

const DenialReason = (props) => {
    return (
        <div className={app.pages}>
            <div className={styles.content}>
            <h2>Причина отказа</h2>
            <p className={styles.desc}>{props.reason}</p>
            </div>
        </div>
    )  
}

let mapStateToProps = (state) => {
    return {
        reason: state.reducer.reason
    }
}

// let mapStateToDispatch = (dispatch) => {
//     return {
//         addResponse: (text) => {
//             dispatch(setResponse(text))
//         },
//         addIsFetching: (text) => {
//             dispatch(setIsFetching(text))
//         }
//     }
// }

const DenialReasonContainer = connect(mapStateToProps, null)(DenialReason)

export default DenialReasonContainer;