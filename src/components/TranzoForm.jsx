import React, { useState } from 'react';
import './css/trazo_form.css';
import { addToBlockchain } from '../contract/functions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TranzoForm = () => {

    const [data, setdata] = useState({});
    const handleSubmit = async (event) => {
        event.preventDefault();
        await addToBlockchain(data);
        alert('Transaction is completed!');
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(values => ({ ...values, [name]: value }))
    }

    return (
        <Row className='tranzo-contents'>
            <Col className="tranzo-texts">
                <div className="tranzo-heading">
                    <div className='tranzo_title'>Tranzo</div>
                    <div className='tranzo_subtitle'>Fast and secure Transaction!</div>
                    <div className='tranzo_'>Developed by : Bappa Banerjee</div>
                    <br></br>
                </div>
            </Col>
            <Col className="tranzo-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label name="receiver:">
                            Receiver:
                        </label>
                        <input type="text" name="receiver" id="receiver" value={data.receiver || ""} className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label name="amount">
                            amount:
                        </label>
                        <input type="text" name="amount" id="amount" value={data.amount || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label name="message">
                            message:
                        </label>
                        <input type="text" name="message" id="message" value={data.message || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label name="keyword">
                            keyword:
                        </label>
                        <input type="text" id="keyword" name="keyword" value={data.keyword || ""} className="form-control" onChange={handleChange} required />

                    </div>
                    <div className="form-group" id='submit_btn' >
                        <button type="submit" value="Submit">Transact</button>
                    </div>
                </form>
            </Col>
        </Row>

    );
};

export default TranzoForm;