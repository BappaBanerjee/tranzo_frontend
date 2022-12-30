import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eth_icon from "./../assets/eth_icon.png";
import './../components/css/tranzo_about.css';
const About = () => {
    return (
        <Row className="about_section">
            <Col className="about_image">
                <div>
                    <img src={eth_icon} alt="" />
                </div>

            </Col>
            <Col className="about_content">
                <div>
                    The Tranzo App is built using the Blockchain technology. It is deployed in Ethereum network(Goerli).
                    The project is mainly focus in the transfer of crypto coins from one acount to another using metamask.
                    <div className="about_content_list">
                        <h4>Technologies used</h4>
                        <ol>
                            <li>Solidity</li>
                            <li>Javascript</li>
                            <li>Hardhat</li>
                            <li>React Js</li>
                            <li>MetaMask</li>
                        </ol>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default About;