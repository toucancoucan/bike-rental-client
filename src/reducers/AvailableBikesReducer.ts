import {bikeForAdd, bikeForRent} from "../copiedFromServer/entityTypes";
import {ThunkAction} from "redux-thunk";
import {rootState} from "./store";
import {apiRoutes} from "../constants/apiRoutes";
import {fetchAndSetRentedBikes} from "./RentedBikesReducer";


const SET_BIKES_FOR_RENT = 'SET_BIKES_FOR_RENT';

type setBikesForRentType = {
    type: typeof SET_BIKES_FOR_RENT,
    payload: Array<bikeForRent>
}

const setBikesForRent = (item: Array<bikeForRent>): setBikesForRentType => {
    return {
        type: SET_BIKES_FOR_RENT,
        payload: item
    }
}

export const fetchAndSetBikesForRent = (): ThunkAction<Promise<void>, rootState, any, setBikesForRentType> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.getAvailable)
        if (response.ok) {
            let data = await response.json();
            dispatch(setBikesForRent(data))
        } else {
            console.log("Error" + response.status);
        }
    }
}


export const uploadNewBikeAndRefetchBikesForRent = (item: bikeForAdd): ThunkAction<Promise<void>, rootState, any, any> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.addBike, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
        })
        if (response.ok) {
            await dispatch(fetchAndSetBikesForRent())
        } else {
            console.log("Error" + response.status);
        }
    }
}

export const deleteBikeAndRefetchBikesForRent = (id: number): ThunkAction<Promise<void>, rootState, any, any> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.deleteBike, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id})
        })
        if (response.ok) {
            await dispatch(fetchAndSetBikesForRent())
        } else {
            console.log("Error" + response.status);
        }
    }
}


export const rentBikeAndRefetchRentedAndAvailable = (id: number): ThunkAction<Promise<void>, rootState, any, any> => {
    return async (dispatch) => {
        let response = await fetch(apiRoutes.addRent, {
            method: 'POST',
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




export type AvailableBikesReducerType = {
    availableBikes: Array<bikeForRent>
}

const AvailableBikesReducerInitialState: AvailableBikesReducerType = {
    availableBikes: []
}

type actionTypes = setBikesForRentType;

const AvailableBikesReducer = (state = AvailableBikesReducerInitialState, action: actionTypes): AvailableBikesReducerType => {
    switch (action.type) {
        case SET_BIKES_FOR_RENT:
            return {
                ...state,
                availableBikes: action.payload
            }
        default:
            return state
    }

}

export default AvailableBikesReducer;