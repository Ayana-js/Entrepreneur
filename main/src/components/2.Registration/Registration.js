import React from 'react'
import reg from './Registration.module.css';
import app from '../../App.module.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import arrow from '../../assests/arrow.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRegion, setValues } from '../../redux/reducer';
import { setAddressType, setEmail, setExactAddress, setLocation, setPassport } from '../../redux/form-reducer';

const Registration = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Enter a valid email').required('Mandatory'),
        nameOfObj: yup.string().typeError('Name should be a string').required('Mandatory'),
        address: yup.string().typeError('Name should be a string').required('Mandatory'),
    })
    const valueRegion = props.region ? props.region + ', ' + props.city : null

    return (
        <div className={`${reg.reg} ${app.pages}`}>
            <div className={`${reg.reg_content} ${app.pages_content}`}>
                <h2>Информация об объекте</h2>
                <Formik
                    initialValues={{
                        email: '',
                        addressType: '',
                        region: '',
                        passport: '',
                        exactAddress: '',
                        taxes: '',
                        activity: '',
                    }}
                    validateOnBlur
                    onSubmit={(values) => { props.addValues(values)}}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleBlur, handleSubmit }) => (
                        <Form className={reg.form}>
                            <div className={reg.form_title}>
                                <input
                                    className={touched.address && errors.address ? reg.error : reg.input}
                                    type="text"
                                    name="passport"
                                    required
                                    onChange={(e) => props.addPassport(e.target.value)}
                                    onBlur={handleBlur}
                                    value={props.passport}
                                />
                                <label htmlFor='text'>Номер паспорта</label>
                            </div>
                            <NavLink to='/ind-ent/region'>
                                <div className={reg.form_title}>
                                    <input
                                        className={touched.region && errors.region ? reg.error : reg.input}
                                        type="text"
                                        name="region"
                                        required
                                        onBlur={handleBlur}
                                        value={valueRegion}
                                    />
                                    <label htmlFor='text'>
                                    Месторасположение деятельности
                                    </label>
                                    <img className={reg.image} src={arrow} alt="" />
                                </div>
                            </NavLink>
                            <div className={reg.form_title}>
                                <input
                                    className={touched.exactAddress && errors.exactAddress ? reg.error : reg.input}
                                    type="text"
                                    name="exactAddress"
                                    required
                                    onChange={(e) => props.addExactAddress(e.target.value)}
                                    onBlur={handleBlur}
                                    value={props.exactAddress}
                                />
                                <label htmlFor='text'>Точный адрес деятельности</label>
                            </div>
                            <NavLink to='/ind-ent/addressType'>
                                <div className={reg.form_title}>
                                    <input
                                        className={touched.addressType && errors.addressType ? reg.error : reg.input}
                                        type="text"
                                        name="addressType"
                                        required
                                        onBlur={handleBlur}
                                        value={props.addressType}
                                    />
                                    <label htmlFor='text'>Тип адреса</label>
                                    <img className={reg.image} src={arrow} alt="" />
                                </div>
                            </NavLink>
                            <div className={reg.form_title}>
                                <input
                                    className={reg.input}
                                    type="mail"
                                    name="email"
                                    required
                                    onChange={(e) => props.addEmail(e.target.value)}
                                    onBlur={handleBlur}
                                    value={props.email}
                                />
                                <label htmlFor='text'>E-mail</label>
                            </div>
                            <div className={reg.buttons}>
                            <div className={reg.form_footer}>
                                {!props.exactAddress || !props.region ||
                                !props.addressType || !props.passport? 
                                    <button onClick={handleSubmit}
                                    className={`${app.btn_light} ${app.btn_disabled}`}> Продолжить </button> :
                                    <button onClick={handleSubmit}
                                    className={reg.button}>    
                                    <NavLink to='/ind-ent/activity'
                                        className={app.btn_light}>
                                        Продолжить
                                    </NavLink>
                                </button>}
                            </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        region: state.reducer.region,
        city: state.reducer.city,
        addressType: state.formReducer.addressType,
        location: state.formReducer.location,
        email: state.formReducer.email,
        exactAddress: state.formReducer.exactAddress,
        passport: state.formReducer.passport,
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addValues: (text) => {
            dispatch(setValues(text))
        },
        addEmail: (text) => {
            dispatch(setEmail(text))
        },
        addAddressType: (text) => {
            dispatch(setAddressType(text))
        },
        addPassport: (text) => {
            dispatch(setPassport(text))
        },
        addExactAddress: (text) => {
            dispatch(setExactAddress(text))
        },
        addRegion: (text) => {
            dispatch(setRegion(text))
        }
    }
}

const RegistrationContainer = connect(mapStateToProps, mapStateToDispatch)(Registration)

export default RegistrationContainer