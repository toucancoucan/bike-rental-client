import React from "react";
import styles from "./AvailableBikes.module.scss";
import Header from "../common/Header/Header";
import beautifyPrice from "../../functions/beautifyPrice";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const AvailableBikes: React.FC<propsType> = (props) => {
    let availableQuantity = 2
    return (
        <>
            <Header text={`🚲 Available bicycles (${availableQuantity})`}/>
        </>
    )
}

export default AvailableBikes;
