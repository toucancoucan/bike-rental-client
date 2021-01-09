import {rentedBike} from "../copiedFromServer/entityTypes";
import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import {apiRoutes} from "../constants/apiRoutes";
import {fetchAndSetBikesForRent} from "./AvailableBikesReducer";


const SET_RENTED_BIKES = 'SET_RENTED_BIKES';

type setRentedBikesType = {
    type: typeof SET_RENTED_BIKES,
    payload: Array<rentedBike>
}

const setRentedBikes = (item: Array<rentedBike>): setRentedBikesType => {
    return {
        type: SET_RENTED_BIKES,
        payload: item
    }
}


export const fetchAndSetRentedBikes = (): ThunkAction<Promise<void>, rootState, any, setRentedBikesType> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.getRented)
        if (response.ok) {
            let data = await response.json();
            dispatch(setRentedBikes(data))
        } else {
            console.log("Error" + response.status);
        }
    }
}

export const cancelRentAndRefetchRentedAndAvailable = (id: number): ThunkAction<Promise<void>, rootState, any, any> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.deleteRent, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id})
        })
        if (response.ok) {
            await dispatch(fetchAndSetBikesForRent())
            await dispatch(fetchAndSetRentedBikes())
        } else {
            console.log("Error" + response.status);
        }
    }
}


export type RentedBikesReducerType = {
    rentedBikes: Array<rentedBike>
}

const RentedBikesReducerInitialState: RentedBikesReducerType = {
    rentedBikes: []
}

type actionTypes = setRentedBikesType;

const RentedBikesReducer = (state = RentedBikesReducerInitialState, action: actionTypes): RentedBikesReducerType => {
    switch (action.type) {
        case SET_RENTED_BIKES:
            return {
                ...state,
                rentedBikes: action.payload
            }
        default:
            return state
    }

}

export default RentedBikesReducer;