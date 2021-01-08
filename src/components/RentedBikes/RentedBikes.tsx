import React from "react";
import Header from "../common/Header/Header";
import beautifyPrice from "../../functions/beautifyPrice";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const RentedBikes: React.FC<propsType> = (props) => {
    let totalPrice = 0
    return (
        <>
            <Header text={`🤟 Your rent (Total: ${beautifyPrice(totalPrice)})`}/>
        </>
    )
}

export default RentedBikes;
