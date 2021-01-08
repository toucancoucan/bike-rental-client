import React, {ReactNodeArray} from "react";
import styles from "./BicycleItem.module.scss";
import PaddingBlock from "../../common/PaddingBlock/PaddingBlock";
import beautifyPrice from "../../../functions/beautifyPrice";


export type bikeInfoType = {
    name: string,
    type: string,
    price: number,
}

type propsType = bikeInfoType & {
    buttons: ReactNodeArray
}

const BikeItemBase: React.FC<propsType> = (props) => {
    return (
        <PaddingBlock>
            <div className={styles.bicycleFlexWrap}>
                <div className={styles.textContainer}>
                    {`${props.name} / ${props.type} / ${beautifyPrice(props.price)}`}
                </div>
                <div className={styles.buttonsContainer}>
                    {props.buttons}
                </div>
            </div>
        </PaddingBlock>
    )
}

export default BikeItemBase;
