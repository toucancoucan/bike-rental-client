import React from "react";
import BikeItemBase, {bikeInfoType} from "./BikeItemBase/BikeItemBase";
import Button from "../common/Button/Button";


type propsType = {
    cancelRent: () => void
} & bikeInfoType

const RentedBike: React.FC<propsType> = (props) => {
    return (
        <BikeItemBase name={props.name} type={props.type} price={props.price} buttons={
            [<Button text={'Cancel rent'} color={"danger"} onClick={props.cancelRent} key={1}/>]
        }/>
    )
}

export default RentedBike;
