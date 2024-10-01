import React from 'react';
import { Input, DatePicker } from 'antd';

const index = ({ formik }) => {

    const handleChangeDate = (Date, dateString) => {
        console.log("check date", Date, dateString);
    }

    console.log("check initialValues", formik.initialValues, formik)
    return (
        
        <div className="container">
            <h1>Item Details</h1>
            <div className='panel'>
                <div className="row">
                    <div className='col-md-6'>
                        <div className="label">
                            Item Name
                        </div>
                        <div className="">
                           <input
                                id="item_name"
                                name="item_name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.item_name}
                            />
                            {/* <Input 
                                name="item_name"
                                placeholder="Item Name" 
                                onChange={formik.handleChange}
                                value={formik.values.item_name} 
                                /> */}
                            <small>Max 50 Characters</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Quantity
                        </div>
                        <div className="">
                            <input
                                id="qty"
                                name="qty"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.qty}
                            />
                            {/* <Input 
                                name="qty"
                                placeholder="Quantity"
                                onChange={formik.handleChange}
                                value={formik.values.qty}  />  */}
                            <small>Numeric Value</small>

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Unit Price
                        </div>
                        <div className="">
                            <input
                                id="unit_price"
                                name="unit_price"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.unit_price}
                            />
                            {/* <Input 
                                name="unit_price"
                                placeholder="Unit Price"
                                onChange={formik.handleChange}
                                value={formik.values.unit_price}  /> */}
                            <small>Numeric Value (USD)</small>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Date of Submisson
                        </div>
                        <div className="">
                            <DatePicker
                                name="date_of_submission"
                                onChange={formik.handleChange} 
                                format={'MM/DD/YYYY'}
                                // onChange={formik.handleChange}
                                value={formik.values.date_of_submission}  />
                            <small>Format: MM/DD/YYYY</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;