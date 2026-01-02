import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const ChangePasswordPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Change Password values:", values);
    // Add your password change logic here
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
        {/* Left Side - Change Password Form */}
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
              Change Password
            </Title>

            <Text
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                display: "block",
                marginBottom: "40px",
              }}
            >
              Update your password to keep your account secure
            </Text>

            <Form
              form={form}
              name="changePassword"
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
                    Old Password
                  </span>
                }
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your old password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#94a3b8" }} />}
                  placeholder="Enter your old password"
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
                    New Password
                  </span>
                }
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your new password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#94a3b8" }} />}
                  placeholder="Enter your new password"
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
                    Confirm Password
                  </span>
                }
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
                style={{ marginBottom: "30px" }}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#94a3b8" }} />}
                  placeholder="Confirm your new password"
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
                  Change Password
                </Button>
              </Form.Item>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Text
                  style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}
                >
                  Remember your password?{" "}
                  <Link
                    onClick={() => navigate("/login")}
                    style={{
                      color: "white",
                      fontWeight: "600",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Back to Login
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
          className="password-illustration"
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
            }}
          >
            <img
              src="/travelillustration.png"
              alt="Travel Illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
          .password-illustration {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChangePasswordPage;
