import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/authApi";

const { Title, Text, Link } = Typography;

const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // ✅ Directly pass form values, no manual payload creation
      const data = await loginApi(values);

      // ✅ Save token in localStorage
      localStorage.setItem("token", data.token);

      message.success("Login successful");

      // ✅ Role-based navigation
      if (data.user.role === "SUPER_ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      message.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-wrapper">
      <Title level={1} className="login-title">
        Welcome Back
      </Title>

      <Text className="login-subtitle">
        Sign in to your account to continue
      </Text>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        {/* 🔹 Username */}
        <Form.Item
          label={<span className="login-label">Username</span>}
          name="name"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter your username"
            size="large"
          />
        </Form.Item>

        {/* 🔹 Password */}
        <Form.Item
          label={<span className="login-label">Password</span>}
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password"
            size="large"
          />
        </Form.Item>

        {/* 🔹 Submit */}
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          loading={loading}
        >
          Sign In
        </Button>

        <div className="login-footer">
          <Text>
            Need to update password?{" "}
            <Link onClick={() => navigate("/change-password")}>
              Change Password
            </Link>
          </Text>

          <Text className="login-copy">© by securepathsolutions</Text>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
