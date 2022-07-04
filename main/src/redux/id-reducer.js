const SET_REGION_ID = 'SET_REGION_ID'
const SET_CITY_ID = 'SET_CITY_ID'
const SET_DISTRICT_ID = 'SET_DISTRICT_ID'
const SET_VILLAGE_ID = 'SET_VILLAGE_ID'
const SET_ACTIVITY_ID = 'SET_ACTIVITY_ID'
const SET_FINAL_CODE = 'SET_FINAL_CODE'

const initialState = {
    regionId: '',
    cityId: '',
    districtId: '',
    villageId: '',
    activityId: '',
    finalCode: ''
}

const Idreducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_REGION_ID:
            return {
                ...state,
                regionId: action.payload
            }
        case SET_CITY_ID:
            return {
                ...state,
                cityId: action.payload
            }
        case SET_DISTRICT_ID:
            return {
                ...state,
                districtId: action.payload
            }
        case SET_VILLAGE_ID:
            return {
                ...state,
                villageId: action.payload
            }
        case SET_ACTIVITY_ID:
            return {
                ...state,
                activityId: action.payload
            }
        case SET_FINAL_CODE:
            return {
                ...state,
                finalCode: action.payload
            }
        default:
            return state
    }
}

export const setRegionId = (payload) => ({ type: SET_REGION_ID, payload })
export const setCityId = (payload) => ({ type: SET_CITY_ID, payload })
export const setDistrictId = (payload) => ({ type: SET_DISTRICT_ID, payload })
export const setVillageId = (payload) => ({ type: SET_VILLAGE_ID, payload })
export const setActivityId = (payload) => ({ type: SET_ACTIVITY_ID, payload })
export const setFinalCode = (payload) => ({ type: SET_FINAL_CODE, payload })

export default Idreducer