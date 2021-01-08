import React from "react";
import styles from "./MainScreen.module.scss";
import Header from "../../components/common/Header/Header";
import CreateRentForm from "../../components/CreateRentForm/CreateRentForm";
import RentedBikes from "../../components/RentedBikes/RentedBikes";
import AvailableBikes from "../../components/AvailableBikes/AvailableBikes";


const MainScreen: React.FC = (props) => {
    return (
        <div className={styles.mainScreenWrap}>
            <div className={styles.contentBlock}>
                <Header text={'Awesome bike rental'} large/>
                <CreateRentForm/>
                <RentedBikes/>
                <AvailableBikes/>
            </div>
        </div>
    )
}

export default MainScreen;
