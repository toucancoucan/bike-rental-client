import React from "react";
import Header from "../common/Header/Header";
import PaddingBlock from "../common/PaddingBlock/PaddingBlock";
import styles from './CreateRentForm.module.scss'
import Button from "../common/Button/Button";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const LabelText: React.FC<{ text: string }> = (props) => <div className={styles.labelText}>
    {props.text}
</div>

const CreateRentForm: React.FC<propsType> = (props) => {
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
                        <select className={styles.input}>

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

export default CreateRentForm;
