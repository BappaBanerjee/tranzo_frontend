import React, { useState } from 'react';
import './css/trazo_form.css';
import { transactAmount } from '../contract/functions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';


const TranzoForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState({});
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const res = await transactAmount(data);
        if (res.status === 404) {
            alert(res.res.code);
        } else if (res.status === 200) {
            alert("Transaction Submitted!!");
        } else {
            alert("Something Bad happened!! Try Later!!");
        }
        setIsLoading(false);
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
                    <div className="network_name">Network : Goerli TestNet</div>
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
                    <div className="form-group" id='submit_btn' >
                        <button type="submit" value="Submit">
                            {
                                isLoading ?
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    /> : "Transact"
                            }

                        </button>
                    </div>
                </form>
            </Col>
        </Row>

    );
};

export default TranzoForm;