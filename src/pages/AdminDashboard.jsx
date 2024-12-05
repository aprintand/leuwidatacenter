import React, { useState } from "react";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LineChartOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Daftar menu yang ada di dashboard
  const menus = [
    {
      title: "Manajemen Pengunjung",
      description: "Kelola data pengunjung, riwayat, dan profil.",
      link: "/manajemen-pengunjung/pendaftaran",
      icon: <UserOutlined style={{ fontSize: "48px", color: "#1890ff" }} />,
    },
    {
      title: "Analisis & Laporan",
      description: "Lihat statistik dan laporan pendapatan.",
      link: "/analisis-laporan/statistik",
      icon: (
        <LineChartOutlined style={{ fontSize: "48px", color: "#52c41a" }} />
      ),
    },
    {
      title: "Peta dan Lokasi",
      description: "Akses peta interaktif dan informasi lokasi.",
      link: "/peta-dan-lokasi",
      icon: <GlobalOutlined style={{ fontSize: "48px", color: "#faad14" }} />,
    },
    {
      title: "Pengaturan Sistem",
      description: "Atur konfigurasi sistem dan keamanan.",
      link: "/pengaturan-sistem/manajemen-pengguna",
      icon: <SettingOutlined style={{ fontSize: "48px", color: "#f5222d" }} />,
    },
  ];

  // Filter menu berdasarkan input pencarian
  const filteredMenus = menus.filter(
    (menu) =>
      menu.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      menu.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <h1
        style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px" }}
      >
        Admin Dashboard
      </h1>

      {/* Fitur Pencarian */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Input.Search
          placeholder="Cari fitur atau menu..."
          enterButton="Cari"
          size="large"
          style={{
            maxWidth: "600px",
            width: "90%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onSearch={(value) => setSearchTerm(value)}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu Dashboard */}
      <Row gutter={[24, 24]} justify="center">
        {filteredMenus.length > 0 ? (
          filteredMenus.map((menu, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Link to={menu.link} style={{ textDecoration: "none" }}>
                <Card
                  hoverable
                  style={{
                    textAlign: "center",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fafafa",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div>
                    <div style={{ marginBottom: "16px" }}>{menu.icon}</div>
                    <h3 style={{ fontSize: "20px", color: "#333" }}>
                      {menu.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#777" }}>
                      {menu.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px", color: "#888" }}>
            Tidak ada fitur yang cocok dengan pencarian.
          </p>
        )}
      </Row>
    </div>
  );
};

export default AdminDashboard;
