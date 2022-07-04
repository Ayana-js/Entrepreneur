const SET_INFO = 'SET_INFO'
const SET_REGION = 'SET_REGION'
const SET_CITY = 'SET_CITY'
const SET_DISTRICT = 'SET_DISTRICT'
const SET_VILLAGE = 'SET_VILLAGE'
const SET_VALUES = 'SET_VALUES'
const SET_FINAL_REGION = 'SET_FINAL_REGION'
const SET_RESPONSE = 'SET_RESPONSE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


const initialState = {
    info: null,
    region: '',
    city: '',
    district: '',
    village: '',
    finalRegion: '',
    response: null,
    isFetching: false
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                info: action.payload
            }
        case SET_REGION:
            return {
                ...state,
                region: action.payload
            }
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            }
        case SET_VALUES:
            return {
                ...state,
                values: action.payload
            }
        case SET_DISTRICT:
            return {
                ...state,
                district: action.payload
            }
        case SET_VILLAGE:
            return {
                ...state,
                village: action.payload
            }
        case SET_FINAL_REGION:
            return {
                ...state,
                finalRegion: action.payload
            }
        case SET_RESPONSE:
            return {
                ...state,
                response: action.payload
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export const setInfo = (payload) => ({ type: SET_INFO, payload })
export const setRegion = (payload) => ({ type: SET_REGION, payload })
export const setCity = (payload) => ({ type: SET_CITY, payload })
export const setValues = (payload) => ({ type: SET_VALUES, payload })
export const setDistrict = (payload) => ({ type: SET_DISTRICT, payload })
export const setVillage = (payload) => ({ type: SET_VILLAGE, payload })
export const setFinalRegion = (payload) => ({ type: SET_FINAL_REGION, payload })
export const setResponse = (payload) => ({ type: SET_RESPONSE, payload })
export const setIsFetching = (payload) => ({ type: SET_IS_FETCHING, payload })

export default reducer