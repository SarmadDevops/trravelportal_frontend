import React from "react";
import { Row, Col } from "antd";
import LoginForm from "../../components/auth/LoginForm";
import LoginIllustration from "../../components/auth/LoginIllustration";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <Row className="login-container">
        <Col xs={24} md={12} className="login-left">
          <LoginForm />
        </Col>

        <Col xs={0} md={12} className="login-right">
          <LoginIllustration />
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
