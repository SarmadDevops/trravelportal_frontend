import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../components/password_Change/Change_Password_form";
import LoginIllustration from "../components/auth/LoginIllustration";
const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const handleChangePassword = (values) => {
    console.log("Change Password values:", values);
    // Add your API logic here
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Row
        style={{
          maxWidth: 1200,
          width: "100%",
          background: "white",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left - Form */}
        <Col
          xs={24}
          md={12}
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
            padding: "60px 50px 30px 50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ChangePasswordForm onFinish={handleChangePassword} navigate={navigate} />
        </Col>

        {/* Right - Illustration */}
          <Col xs={0} md={12} className="login-right">
                  <LoginIllustration />
                </Col>
      </Row>
    </div>
  );
};

export default ChangePasswordPage;
