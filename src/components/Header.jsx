import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LineChartOutlined,
  GithubOutlined,
  GlobalOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"; // Import logo

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",  // Center the header
        alignItems: "center",
        background: "#001529", // Dark background for header
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center logo and link
          flexGrow: 1,
        }}
      >
        <Link to="http://localhost:5173/">
          <img
            src={Logo} // Use imported Logo variable
            alt="Logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
        </Link>
        <Link
          to="http://localhost:5173/"
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Admin Dashboard
        </Link>
      </div>

      {/* Menu utama di Header */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          flex: 1,
          minWidth: 0,
          textAlign: "center",
        }}
      >
        {/* Manajemen Pengunjung */}
        <Menu.SubMenu
          key="manajemen-pengunjung"
          icon={<UserOutlined />}
          title="Manajemen Pengunjung"
        >
          <Menu.Item key="pendaftaran">
            <Link to="/manajemen-pengunjung/pendaftaran">
              Pendaftaran Pengunjung Baru
            </Link>
          </Menu.Item>
          <Menu.Item key="riwayat">
            <Link to="/manajemen-pengunjung/riwayat">
              Daftar Riwayat Kunjungan
            </Link>
          </Menu.Item>
          <Menu.Item key="profil">
            <Link to="/manajemen-pengunjung/profil">
              Profil dan Detail Pengunjung
            </Link>
          </Menu.Item>
          <Menu.Item key="status">
            <Link to="/manajemen-pengunjung/status">
              Status Kunjungan Aktif
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Analisis dan Laporan */}
        <Menu.SubMenu
          key="analisis-laporan"
          icon={<LineChartOutlined />}
          title="Analisis dan Laporan"
        >
          <Menu.Item key="statistik">
            <Link to="/analisis-laporan/statistik">Statistik Pengunjung</Link>
          </Menu.Item>
          <Menu.Item key="laporan">
            <Link to="/analisis-laporan/laporan">Laporan Pendapatan</Link>
          </Menu.Item>
          <Menu.Item key="tren">
            <Link to="/analisis-laporan/tren">Tren Kunjungan</Link>
          </Menu.Item>
          <Menu.Item key="export">
            <Link to="/analisis-laporan/export">Export Data</Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Peta dan Lokasi */}
        <Menu.SubMenu
          key="peta-lokasi"
          icon={<GlobalOutlined />}
          title="Peta dan Lokasi"
        >
          <Menu.Item key="peta">
            <Link to="/peta-lokasi/peta">Peta Interaktif Wisata</Link>
          </Menu.Item>
          <Menu.Item key="info">
            <Link to="/peta-lokasi/info">Informasi Lokasi</Link>
          </Menu.Item>
          <Menu.Item key="rute">
            <Link to="/peta-lokasi/rute">Rute dan Panduan</Link>
          </Menu.Item>
          <Menu.Item key="poi">
            <Link to="/peta-lokasi/poi">Point of Interest</Link>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Pengaturan Sistem */}
        <Menu.SubMenu
          key="pengaturan-sistem"
          icon={<SafetyOutlined />}
          title="Pengaturan Sistem"
        >
          <Menu.Item key="manajemen-pengguna">
            <Link to="/pengaturan-sistem/manajemen-pengguna">
              Manajemen Pengguna
            </Link>
          </Menu.Item>
          <Menu.Item key="konfigurasi">
            <Link to="/pengaturan-sistem/konfigurasi">Konfigurasi Sistem</Link>
          </Menu.Item>
          <Menu.Item key="keamanan">
            <Link to="/pengaturan-sistem/keamanan">Keamanan</Link>
          </Menu.Item>
          <Menu.Item key="backup">
            <Link to="/pengaturan-sistem/backup">Backup Data</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
