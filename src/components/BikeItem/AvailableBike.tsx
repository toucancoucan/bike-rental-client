import React from "react";
import BikeItemBase, {bikeInfoType} from "./BikeItemBase/BikeItemBase";
import Button from "../common/Button/Button";

type propsType = {
    rentBike: () => void
    deleteBike: () => void
} & bikeInfoType

const AvailableBike: React.FC<propsType> = (props) => {
    return (
        <BikeItemBase name={props.name} type={props.type} price={props.price} buttons={[
            <Button text={'Rent'} color={"primary"} onClick={props.rentBike} key={1}/>,
            <Button text={'Delete'} color={"danger"} onClick={props.deleteBike} key={2}/>
        ]}/>
    )
}

export default AvailableBike;
