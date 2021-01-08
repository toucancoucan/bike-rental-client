import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

type propsType = {
    text:string,
    large?:boolean
}

const Header: React.FC<propsType> = (props) => {
    return (
        <div className={classNames(styles.header, props.large? styles.large:'')}>
            {props.text}
        </div>
    )
}

export default Header;
