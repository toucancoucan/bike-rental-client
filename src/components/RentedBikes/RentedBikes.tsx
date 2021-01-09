import React, {useEffect} from "react";
import Header from "../common/Header/Header";
import beautifyPrice from "../../functions/beautifyPrice";
import {connect} from "react-redux";
import {rootState} from "../../reducers/store";
import {rentedBike} from "../../types/entityTypes";
import {cancelRentAndRefetchRentedAndAvailable, fetchAndSetRentedBikes} from "../../reducers/RentedBikesReducer";
import RentedBike from "../BikeItem/RentedBike";

type mapStateToProps = {
    rentedBikes: Array<rentedBike>
}

type mapDispatchToProps = {
    fetchAndSetRentedBikes: () => void
    cancelRentAndRefetchRentedAndAvailable: (id: number) => void
}

type propsType = mapStateToProps & mapDispatchToProps;

const _RentedBikes: React.FC<propsType> = (props) => {
    useEffect(() => {
        if (props.rentedBikes.length === 0) {
            props.fetchAndSetRentedBikes();
        }
    }, [props])

    let totalPrice = 0;
    props.rentedBikes.forEach(e => totalPrice += e.price)

    return (
        <>
            <Header text={`🤟 Your rent (Total: ${beautifyPrice(totalPrice)})`}/>
            {props.rentedBikes.map((e, i) =>
                <RentedBike key={i} cancelRent={() => props.cancelRentAndRefetchRentedAndAvailable(e.rent_id)}
                            name={e.name} type={e.type} price={e.price}/>)}
        </>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        rentedBikes: state.RentedBikesReducer.rentedBikes
    }
};


const RentedBikes = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {fetchAndSetRentedBikes, cancelRentAndRefetchRentedAndAvailable})(_RentedBikes)

export default RentedBikes;
