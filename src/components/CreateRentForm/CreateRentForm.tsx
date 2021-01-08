import React, {useEffect} from "react";
import Header from "../common/Header/Header";
import PaddingBlock from "../common/PaddingBlock/PaddingBlock";
import styles from './CreateRentForm.module.scss';
import Button from "../common/Button/Button";
import {connect} from "react-redux";
import {rootState} from "../../reducers/store";
import {bikeType} from "../../copiedFromServer/entityTypes";
import {fetchAndSetBikeTypes} from "../../reducers/BikeTypesReducer";

type mapStateToProps = {
    bikeTypes: Array<bikeType>
}

type mapDispatchToProps = {
    fetchAndSetBikeTypes: () => void
}

type propsType = mapStateToProps & mapDispatchToProps;

const LabelText: React.FC<{ text: string }> = (props) => <div className={styles.labelText}>
    {props.text}
</div>

const _CreateRentForm: React.FC<propsType> = (props) => {
    useEffect(() => {
        if (props.bikeTypes.length === 0) {
            props.fetchAndSetBikeTypes();
        }
    }, [props])
    return (
        <>
            <Header text={`💸 Create new rent`}/>
            <PaddingBlock darkBackground>
                <form className={styles.formFlex}>
                    <label className={styles.label}>
                        <LabelText text={'Bike name'}/>
                        <input placeholder={'Example: Flash 77 '} type="text" className={styles.input}/>
                    </label>
                    <label className={styles.label}>
                        <LabelText text={'Bike type'}/>
                        <select className={styles.select}>
                            {    props.bikeTypes?.map((e,i)=>
                                <option key={i} className={styles.selectOption} value={e.bike_type_id}>{e.type}</option>)
                            }
                        </select>
                    </label>
                    <label className={styles.label}>
                        <LabelText text={'Rent price'}/>
                        <input placeholder={'Example: 10.25'} type='number' className={styles.input}/>
                    </label>
                    <label className={styles.buttonLabel}>
                        <Button text={'Submit rent'} color={"success"} onClick={() => {
                        }}/>
                    </label>
                </form>
            </PaddingBlock>
        </>
    )
}

const mapStateToProps = (state: rootState): mapStateToProps => {
    return {
        bikeTypes: state.BikeTypesReducer.bikeTypes
    }
};


const CreateRentForm = connect<mapStateToProps, mapDispatchToProps, any, any>(mapStateToProps,
    {fetchAndSetBikeTypes})(_CreateRentForm)

export default CreateRentForm;
