import React, {useEffect} from "react";
import Header from "../common/Header/Header";
import {connect} from "react-redux";
import {rootState} from "../../reducers/store";
import {bikeForRent} from "../../copiedFromServer/entityTypes";
import {fetchAndSetBikesForRent} from "../../reducers/AvailableBikesReducer";
import AvailableBike from "../BikeItem/AvailableBike";

type mapStateToProps = {
    availableBikes: Array<bikeForRent>
}

type mapDispatchToProps = {
    fetchAndSetBikesForRent: () => void
}

type propsType = mapStateToProps & mapDispatchToProps;

const _AvailableBikes: React.FC<propsType> = (props) => {
    useEffect(() => {
        if (props.availableBikes.length === 0) {
            props.fetchAndSetBikesForRent();
        }
    }, [props])
    return (
        <>
            <Header text={`🚲 Available bicycles (${props.availableBikes.length})`}/>
            {props.availableBikes.map(e => <AvailableBike deleteBike={() => {
            }} rentBike={() => {
            }} name={e.name} type={e.type} price={e.price}/>)}

        </>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        availableBikes: state.AvailableBikesReducer.availableBikes
    }
};


const AvailableBikes = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {fetchAndSetBikesForRent})(_AvailableBikes)

export default AvailableBikes;
