import React from 'react';
import { Input, Select } from 'antd';

const index = () => {

    return (
        <div className="container">
            <h1>supplier Details</h1>
            <div className='panel'>
                <div className="row">
                    <div className='col-md-6'>
                        <div className="label">
                            Supplier Name
                        </div>
                        <div className="">
                            <Input placeholder="Item Name" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Company Name
                        </div>
                        <div className="">
                            <Input placeholder="Quantity" /> 
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Country
                        </div>
                        <div className="">
                            <Select placeholder="Unit Price" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            State
                        </div>
                        <div className="">
                            <Input placeholder="Date of Submisson" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            City
                        </div>
                        <div className="">
                            <Input placeholder="Date of Submisson" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="label">
                            Email Address
                        </div>
                        <div className="">
                            <Input placeholder="Date of Submisson" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;