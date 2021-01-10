import React, {useEffect} from "react";
import Header from "../common/Header/Header";
import PaddingBlock from "../common/PaddingBlock/PaddingBlock";
import styles from './CreateRentForm.module.scss';
import Button from "../common/Button/Button";
import {connect} from "react-redux";
import {rootState} from "../../reducers/store";
import {bikeForAdd, bikeType} from "../../types/entityTypes";
import {fetchAndSetBikeTypes} from "../../reducers/BikeTypesReducer";
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {uploadNewBikeAndRefetchBikesForRent} from "../../reducers/AvailableBikesReducer";

type mapStateToProps = {
    bikeTypes: Array<bikeType>
}

type mapDispatchToProps = {
    fetchAndSetBikeTypes: () => void
    uploadNewBikeAndAddToStore: (item: bikeForAdd) => void
}

type propsType = mapStateToProps & mapDispatchToProps;


const ErrorText: React.FC<{ text: string }> = (props) => <div className={styles.errorText}>
    {props.text}
</div>


const FormLabel: React.FC<{ title: string }> = (props) => <label className={styles.label}>
    <div className={styles.labelText}>{props.title}</div>
    {props.children}
</label>


const _CreateRentForm: React.FC<propsType> = (props) => {

    useEffect(() => {
        if (!props.bikeTypes.length) {
            props.fetchAndSetBikeTypes();
        }
    }, [props])
    const {register, handleSubmit, errors} = useForm<bikeForAdd>();
    const onSubmit = (data: bikeForAdd) => props.uploadNewBikeAndAddToStore(data);


    return (
        <>
            <Header text={`💸 Create new rent`}/>
            <PaddingBlock darkBackground>
                <form className={styles.formFlex} onSubmit={handleSubmit(onSubmit)}>

                    <FormLabel title={'Bike name'}>
                        <input name={'name'} ref={register({required: true})} placeholder={'Example: Flash 77 '}
                               type="text"
                               className={classNames(styles.input, errors.name && styles.errorBorder)}/>
                        {errors.name && <ErrorText text={'Please enter bike name'}/>}
                    </FormLabel>

                    <FormLabel title={'Bike type'}>
                        <select name={'bike_type_id'} ref={register({required: true, valueAsNumber: true})}
                                className={styles.select}>
                            {props.bikeTypes?.map((e, i) =>
                                <option key={i} className={styles.selectOption}
                                        value={e.bike_type_id}>{e.type}</option>)
                            }
                        </select>
                    </FormLabel>

                    <FormLabel title={'Rent price'}>
                        <input name={'price'} ref={register({required: true, min: 0, valueAsNumber: true})}
                               placeholder={'Example: 10.25'}
                               type='number'
                               step="0.01"
                               className={classNames(styles.input, errors.price && styles.errorBorder)}/>
                        {errors.price && <ErrorText text={'Please enter bike price'}/>}
                    </FormLabel>

                    <label className={styles.buttonLabel}>
                        <Button text={'Submit rent'} color={"success"}/>
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
    {fetchAndSetBikeTypes, uploadNewBikeAndAddToStore: uploadNewBikeAndRefetchBikesForRent})(_CreateRentForm)

export default CreateRentForm;
