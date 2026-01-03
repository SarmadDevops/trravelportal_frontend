import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../api/authApi";

// ✅ Forward props so AntD Form works correctly
const PasswordInput = (props) => (
  <Input.Password
    {...props} // important: value, onChange, placeholder, etc
    size="large"
    style={{
      borderRadius: 10,
      padding: "12px 15px",
      fontSize: 15,
      border: "2px solid rgba(255,255,255,0.3)",
      background: "rgba(255,255,255,0.1)",
      color: "white",
    }}
  />
);

// Button
const PrimaryButton = ({ children, htmlType, loading }) => (
  <Button
    type="primary"
    htmlType={htmlType}
    size="large"
    block
    loading={loading}
    style={{
      borderRadius: 10,
      height: 50,
      fontSize: 16,
      fontWeight: 600,
      background: "rgba(255,255,255,0.2)",
      border: "2px solid rgba(255,255,255,0.3)",
      color: "white",
      transition: "all 0.3s ease",
    }}
  >
    {children}
  </Button>
);

const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // ✅ call API
      const data = await changePasswordApi(values);
      message.success(data.message || "Password changed successfully");
      form.resetFields();
      navigate("/login");
    } catch (err) {
      message.error(err.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", width: "100%" }}>
      <h1 style={{ color: "white", marginBottom: 10, fontSize: 42, fontWeight: 700 }}>
        Change Password
      </h1>
      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 16, marginBottom: 40 }}>
        Update your password to keep your account secure
      </p>

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
        {/* Old Password */}
        <Form.Item
          label={<span style={{ color: "white", fontWeight: 500 }}>Old Password</span>}
          name="oldPassword"
          rules={[{ required: true, message: "Please enter your old password!" }]}
        >
          <PasswordInput placeholder="Enter your old password" />
        </Form.Item>

        {/* New Password */}
        <Form.Item
          label={<span style={{ color: "white", fontWeight: 500 }}>New Password</span>}
          name="newPassword"
          rules={[
            { required: true, message: "Please enter your new password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <PasswordInput placeholder="Enter your new password" />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          label={<span style={{ color: "white", fontWeight: 500 }}>Confirm Password</span>}
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) return Promise.resolve();
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <PasswordInput placeholder="Confirm your new password" />
        </Form.Item>

        <Form.Item>
          <PrimaryButton htmlType="submit" loading={loading}>
            Change Password
          </PrimaryButton>
        </Form.Item>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 15 }}>
            Remember your password?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "white", fontWeight: 600, textDecoration: "underline", cursor: "pointer" }}
            >
              Back to Login
            </span>
          </span>
        </div>

        <div style={{ textAlign: "center", marginTop: 5 }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>© by securepathsolutions</span>
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
