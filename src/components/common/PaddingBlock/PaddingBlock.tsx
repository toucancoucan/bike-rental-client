import classNames from "classnames";
import React from "react";
import styles from "./PaddingBlock.module.scss";

type propsType = {
    darkBackground?: boolean
}

const PaddingBlock: React.FC<propsType> = (props) => {
    return (
        <div className={classNames(styles.paddingBlock, props.darkBackground ? styles.darkBackground : '')}>
            {props.children}
        </div>
    )
}

export default PaddingBlock;
