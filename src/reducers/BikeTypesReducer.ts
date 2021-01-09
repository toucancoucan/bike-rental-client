import {bikeType} from "../types/entityTypes";
import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import {apiRoutes} from "../constants/apiRoutes";

export type BikeTypesReducerType = {
    bikeTypes: Array<bikeType>,
}

const SET_BIKE_TYPES = 'SET_BIKE_TYPES';

type setBikeTypesType = {
    type: typeof SET_BIKE_TYPES,
    payload: Array<bikeType>
}

const setBikeTypes = (item: Array<bikeType>): setBikeTypesType => {
    return {
        type: SET_BIKE_TYPES,
        payload: item
    }
}

export const fetchAndSetBikeTypes = (): ThunkAction<Promise<void>, rootState, any, setBikeTypesType> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.getBikeTypes)
        if (response.ok) {
            let data = await response.json();
            dispatch(setBikeTypes(data))
        } else {
            console.log("Error" + response.status);
        }
    }
}


const BikeTypesReducerInitialState: BikeTypesReducerType = {
    bikeTypes: []
}

type actionTypes = setBikeTypesType;

const BikeTypesReducer = (state = BikeTypesReducerInitialState, action: actionTypes): BikeTypesReducerType => {
    switch (action.type) {
        case SET_BIKE_TYPES:
            return {
                ...state,
                bikeTypes: action.payload
            }
        default:
            return state
    }

}

export default BikeTypesReducer;