import React, {useEffect} from "react";
import Header from "../common/Header/Header";
import {connect} from "react-redux";
import {rootState} from "../../reducers/store";
import {bikeForRent} from "../../types/entityTypes";
import {
    deleteBikeAndRefetchBikesForRent,
    fetchAndSetBikesForRent,
    rentBikeAndRefetchRentedAndAvailable
} from "../../reducers/AvailableBikesReducer";
import AvailableBike from "../BikeItem/AvailableBike";

type mapStateToProps = {
    availableBikes: Array<bikeForRent>
}

type mapDispatchToProps = {
    fetchAndSetBikesForRent: () => void
    deleteBikeAndRefetchBikesForRent: (id: number) => void
    rentBikeAndRefetchRentedAndAvailable: (id: number) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

const _AvailableBikes: React.FC<propsType> = (props) => {

    useEffect(() => {
        if (!props.availableBikes.length) {
            props.fetchAndSetBikesForRent();
        }
    }, [props])

    return (
        <>
            <Header text={`🚲 Available bicycles (${props.availableBikes.length})`}/>
            {props.availableBikes.map((e, i) => <AvailableBike
                deleteBike={() => props.deleteBikeAndRefetchBikesForRent(e.bike_id)}
                rentBike={() => props.rentBikeAndRefetchRentedAndAvailable(e.bike_id)}
                key={i} name={e.name} type={e.type} price={e.price}/>)}
        </>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        availableBikes: state.AvailableBikesReducer.availableBikes
    }
};


const AvailableBikes = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {
        fetchAndSetBikesForRent, deleteBikeAndRefetchBikesForRent,
        rentBikeAndRefetchRentedAndAvailable
    })(_AvailableBikes)

export default AvailableBikes;
