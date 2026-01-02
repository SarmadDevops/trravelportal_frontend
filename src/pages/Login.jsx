import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login values:", values);
    // Add your login logic here
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Row
        style={{
          maxWidth: "1200px",
          width: "100%",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left Side - Login Form */}
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
          <div style={{ maxWidth: "400px", margin: "0 auto", width: "100%" }}>
            <Title
              level={1}
              style={{
                color: "white",
                marginBottom: "10px",
                fontSize: "42px",
                fontWeight: "700",
              }}
            >
              Welcome Back
            </Title>

            <Text
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                display: "block",
                marginBottom: "40px",
              }}
            >
              Sign in to your account to continue
            </Text>

            <Form
              form={form}
              name="login"
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                label={
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </span>
                }
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined style={{ color: "#94a3b8" }} />}
                  placeholder="Enter your email"
                  size="large"
                  style={{
                    borderRadius: "10px",
                    padding: "12px 15px",
                    fontSize: "15px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                  className="custom-input"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Password
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
                style={{ marginBottom: "30px" }}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#94a3b8" }} />}
                  placeholder="Enter your Password"
                  size="large"
                  style={{
                    borderRadius: "10px",
                    padding: "12px 15px",
                    fontSize: "15px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                  className="custom-input"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  style={{
                    borderRadius: "10px",
                    height: "50px",
                    fontSize: "16px",
                    fontWeight: "600",
                    background: "rgba(255,255,255,0.2)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Sign in
                </Button>
              </Form.Item>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Text
                  style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}
                >
                  Need to update your password?{" "}
                  <Link
                    onClick={() => navigate("/change-password")}
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Change Password
                  </Link>
                </Text>
              </div>

              <div style={{ textAlign: "center", marginTop: "5px" }}>
                <Text
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}
                >
                  © by securepathsolutions
                </Text>
              </div>
            </Form>
          </div>
        </Col>

        {/* Right Side - Illustration */}
        <Col
          xs={0}
          md={12}
          className="login-illustration"
          style={{
            background: "white",
            padding: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f8fafc",
              borderRadius: "15px",
              minHeight: "400px",
              padding: "20px",
            }}
          >
            <img
              src="/travelillustration.png"
              alt="Travel Illustration"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "15px",
              }}
            />
          </div>
        </Col>
      </Row>

      <style>{`
        .custom-input input,
        .custom-input textarea {
          background: transparent !important;
          color: white !important;
        }
        
        .custom-input input::placeholder,
        .custom-input textarea::placeholder {
          color: rgba(255,255,255,0.6) !important;
        }
        
        .ant-input-password {
          background: rgba(255,255,255,0.1) !important;
        }
        
        .ant-input-affix-wrapper {
          background: rgba(255,255,255,0.1) !important;
          border: 2px solid rgba(255,255,255,0.3) !important;
        }
        
        .ant-input-affix-wrapper:hover,
        .ant-input-affix-wrapper:focus,
        .ant-input-affix-wrapper-focused {
          background: rgba(255,255,255,0.15) !important;
          border-color: rgba(255,255,255,0.5) !important;
          box-shadow: none !important;
        }
        
        .ant-input-password-icon {
          color: rgba(255,255,255,0.7) !important;
        }
        
        .ant-form-item-explain-error {
          color: #fecaca !important;
        }

        @media (max-width: 768px) {
          .login-illustration {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
