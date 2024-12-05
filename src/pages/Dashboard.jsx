import React from "react";
import { Button, Layout } from "antd";
import { useAuth } from "../context/AuthContext";

const { Content } = Layout;

const Dashboard = () => {
  const { logout } = useAuth(); // Ambil fungsi logout dari AuthContext

  const handleLogout = () => {
    logout(); // Logout pengguna dan hapus autentikasi
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Content style={{ padding: "20px", textAlign: "center" }}>
        <h1>Selamat Datang di Dashboard</h1>
        <p>Ini adalah halaman utama setelah login berhasil.</p>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Content>
    </Layout>
  );
};

export default Dashboard;
