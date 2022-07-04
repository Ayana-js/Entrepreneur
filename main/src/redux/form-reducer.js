const SET_ACTIVITY = 'SET_ACTIVITY'
const SET_TAX = 'SET_TAX'
const SET_ADDRESS_TYPE = 'SET_ADDRESS_TYPE'
const SET_EXACT_ADDRESS = 'SET_EXACT_ADDRESS'
const SET_EMAIL = 'SET_EMAIL'
const SET_PASSPORT = 'SET_PASSPORT'
const SET_TAX_MODE = 'SET_TAX_MODE'
const SET_ADRESS_TYPE_CONTENT = 'SET_ADRESS_TYPE_CONTENT'


const initialState = {
    activity: '',
    tax: '',
    addressType: '',
    email: '',
    passport: '',
    exactAddress: '',
    taxMode: '',
    addressTypeContent: ''
}

const formReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_ACTIVITY:
            return {
                ...state,
                activity: action.payload
            }
        case SET_TAX:
            return {
                ...state,
                tax: action.payload
            }
        case SET_ADDRESS_TYPE:
            return {
                ...state,
                addressType: action.payload
            }
        case SET_EXACT_ADDRESS:
            return {
                ...state,
                exactAddress: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_PASSPORT:
            return {
                ...state,
                passport: action.payload
            }
        case SET_TAX_MODE:
            return {
                ...state,
                taxMode: action.payload
            }
        case SET_ADRESS_TYPE_CONTENT:
            return {
                ...state,
                addressTypeContent: action.payload
            }
        default:
            return state
    }
}

export const setActivity = (payload) => ({ type: SET_ACTIVITY, payload })
export const setPassport = (payload) => ({ type: SET_PASSPORT, payload })
export const setEmail = (payload) => ({ type: SET_EMAIL, payload })
export const setExactAddress = (payload) => ({ type: SET_EXACT_ADDRESS, payload })
export const setAddressType = (payload) => ({ type: SET_ADDRESS_TYPE, payload })
export const setTax = (payload) => ({ type: SET_TAX, payload })
export const setTaxMode = (payload) => ({ type: SET_TAX_MODE, payload })
export const setAddressTypeContent = (payload) => ({ type: SET_ADRESS_TYPE_CONTENT, payload })

export default formReducer