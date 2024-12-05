import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, Card, message } from "antd";

const { Title } = Typography;

const Login = () => {
  const { login, isAuthenticated } = useAuth(); // Make sure isAuthenticated is correctly set in AuthContext
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validUsers = [
    { email: "apprintan@gmail.com", password: "admin1234" },
    { email: "deni@gmail.com", password: "admin1234" },
  ];

  useEffect(() => {
    // Redirect to home if already authenticated
    if (isAuthenticated) {
      navigate("/"); // Redirect to home page
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (values) => {
    setLoading(true);

    const user = validUsers.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      message.success("Login successful!");
      setTimeout(() => {
        login(); // Ensure login sets authentication state correctly
        navigate("/"); // Navigate to home or the dashboard after successful login
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        message.error("Invalid email or password!");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        style={{
          width: 400,
          padding: 20,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: 20 }}>
          Login
        </Title>
        <Form
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{ marginTop: 10 }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
