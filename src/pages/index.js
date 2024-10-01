import React, { useState } from 'react';
import { Radio, Button } from 'antd';
import ItemForm from '../components/ItemForm';
import SuppierForm from '../components/SuppliersForm';
import { useFormik } from "formik";

import '../assets/css/itemform.css'

const MainPage = () => {

    const itemFormik = useFormik({
        initialValues : {
            item_name: '',
            qty: '',
            unit_price: '',
            date_of_submission: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    
    const [value, setValue] = useState('item');

    const handleChangeRadio = (e) => {
        console.log("check value", e.target.value);
        setValue(e.target.value);   
    }

    console.log("check outside value", value)
    return (
        <>
            <Radio.Group 
                onChange={handleChangeRadio}
                value={value}
            >
                <Radio value={'item'}>Item</Radio>
                <Radio value={'suppliers'}>Suppliers</Radio>
            </Radio.Group>


            {value === "item" && (
                <div className="itemform-panel">
                    <form onSubmit={itemFormik.handleSubmit}>
                        <ItemForm formik={itemFormik}/>
                    </form>
                </div>
            )}

            {value === "suppliers" && (
                <div>
                    <SuppierForm />
                </div>
            )}

            <div className="button-area">
                <button type="submit" color="primary">Save Changes</button>
            </div>
        </>
    )

}

export default MainPage;