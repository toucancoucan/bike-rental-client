import classnames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

type colors = 'danger' | 'primary' | 'success'
type propsType = {
    text: string
    color: colors
    onClick: () => void
}

const Button: React.FC<propsType> = (props) => {
    return (
        <button className={classnames(styles.button, getButtonStyle(props.color))} onClick={() => props.onClick()}>
            {props.text}
        </button>
    )
}

const getButtonStyle = (color: colors) => {
    switch (color) {
        case "danger":
            return styles.danger
        case "primary":
            return styles.primary
        case "success":
            return styles.success
    }
};

export default Button;
