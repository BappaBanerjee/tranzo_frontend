import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import eth_icon from "./../assets/Bappa.jpg";
const Contact = () => {
    return (
        <Row className="contact_section">
            <Col className="contact_image">
                <img src={eth_icon} alt="Avatar" className="profile_image" />
            </Col>
            <Col className="contact_content">
                <div className="contact_name">Bappa Banerjee</div>
                <div className="contact_details">Blockchain developer</div>
                <div className="contact_skills">
                    <h4>Skills Set </h4>
                    <ul>
                        <li>FrontEnd Technologies : Html , CSS , Javascript , React</li>
                        <li>Backend Technologies : Nodejs , Php</li>
                        <li>Blockchain Technologies : Ethereum , ICP , Solidity , Hardhat , ERC Tokens ,  Motoko</li>
                    </ul>
                </div>
                <div className="contact_links">
                    <h4>Social Links</h4>
                    <ul>
                        <li>Github account :
                            <a href="https://github.com/BappaBanerjee" target="_blank" rel="noreferrer">
                                https://github.com/BappaBanerjee
                            </a>
                        </li>
                        <li>LinkedIn Account :
                            <a href="https://www.linkedin.com/in/bappa-banerjee-2aa670191/" target="_blank" rel="noreferrer">
                                https://www.linkedin.com/in/bappa-banerjee-2aa670191/
                            </a>
                        </li>
                        <li>Smart Contract Source Code :
                            <a href="https://github.com/BappaBanerjee/smartContracts/tree/main/contracts" target="_blank" rel="noreferrer">
                                https://github.com/BappaBanerjee/smartContracts/tree/main/contracts
                            </a>
                        </li>
                        <li>Frontend Source Code :
                            <a href="https://github.com/BappaBanerjee/tranzo_frontend" target="_blank" rel="noreferrer">
                                https://github.com/BappaBanerjee/tranzo_frontend
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}
export default Contact;