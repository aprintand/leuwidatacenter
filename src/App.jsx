import React, { useState, useEffect } from "react";
import { Layout, ConfigProvider, Spin, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PageLoader from "./components/PageLoader";

import Header from "./components/Header";

// Pages for Manajemen Pengunjung
import PendaftaranPengunjung from "./pages/ManajemenPengunjung/PendaftaranPengunjung";
import RiwayatKunjungan from "./pages/ManajemenPengunjung/RiwayatKunjungan";
import ProfilPengunjung from "./pages/ManajemenPengunjung/ProfilPengunjung";
import StatusKunjungan from "./pages/ManajemenPengunjung/StatusKunjungan";

// Pages for Analisis dan Laporan
import StatistikPengunjung from "./pages/AnalisisLaporan/StatistikPengunjung";
import LaporanPendapatan from "./pages/AnalisisLaporan/LaporanPendapatan";
import TrenKunjungan from "./pages/AnalisisLaporan/TrenKunjungan";
import ExportData from "./pages/AnalisisLaporan/ExportData";

// Pages for Pengaturan Sistem
import ManajemenPengguna from "./pages/PengaturanSistem/ManajemenPengguna";
import KonfigurasiSistem from "./pages/PengaturanSistem/KonfigurasiSistem";
import Keamanan from "./pages/PengaturanSistem/Keamanan";
import BackupData from "./pages/PengaturanSistem/BackupData";

// Dashboard
import AdminDashboard from "./pages/AdminDashboard";

// NotFound Page
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";

const { Content, Footer, Sider } = Layout;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visitorData, setVisitorData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  const handleVisitorSubmit = (newVisitor) => {
    const visitorWithDate = {
      ...newVisitor,
      key: Math.random().toString(),
      tanggal: new Date().toLocaleDateString(),
      waktuMasuk: new Date().toLocaleTimeString(),
      status: true, // Default status is 'Aktif'
    };
    setVisitorData((prevData) => [...prevData, visitorWithDate]);
    setStatusData((prevData) => [...prevData, visitorWithDate]);
  };

  return (
    <AuthProvider>
      <Router>
        <ConfigProvider
          theme={{ token: { colorPrimary: "#1890ff" }, dark: isDarkMode }}
        >
          <Spin spinning={loading} size="large">
            <Layout
              style={{
                minHeight: "100vh",
                backgroundColor: isDarkMode ? "#141414" : "#fff",
              }}
            >
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  theme={isDarkMode ? "dark" : "light"}
                  defaultSelectedKeys={["1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <Menu.Item key="1">
                    <Link to="/">Dashboard</Link>
                  </Menu.Item>

                  {/* Manajemen Pengunjung Menu */}
                  <Menu.Item key="2">
                    <Link to="/manajemen-pengunjung/pendaftaran">
                      Pendaftaran Pengunjung
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/manajemen-pengunjung/riwayat">
                      Riwayat Kunjungan
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/manajemen-pengunjung/profil">
                      Profil Pengunjung
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/manajemen-pengunjung/status">
                      Status Kunjungan
                    </Link>
                  </Menu.Item>

                  {/* Analisis dan Laporan Menu */}
                  <Menu.Item key="6">
                    <Link to="/analisis-laporan/statistik">
                      Statistik Pengunjung
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/analisis-laporan/pendapatan">
                      Laporan Pendapatan
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Link to="/analisis-laporan/tren">Tren Kunjungan</Link>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to="/analisis-laporan/export">Export Data</Link>
                  </Menu.Item>

                  {/* Pengaturan Sistem Menu */}
                  <Menu.Item key="10">
                    <Link to="/pengaturan-sistem/manajemen">
                      Manajemen Pengguna
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <Link to="/pengaturan-sistem/konfigurasi">
                      Konfigurasi Sistem
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <Link to="/pengaturan-sistem/keamanan">Keamanan</Link>
                  </Menu.Item>
                  <Menu.Item key="13">
                    <Link to="/pengaturan-sistem/backup">Backup Data</Link>
                  </Menu.Item>
                </Menu>
              </Sider>

              <Layout>
                <Header />
                <Content
                  style={{
                    padding: "24px",
                    margin: "0",
                    background: isDarkMode ? "#1f1f1f" : "#fff",
                    minHeight: "280px",
                  }}
                >
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/"
                      element={<PrivateRoute element={<AdminDashboard />} />}
                    />
                    <Route
                      path="/manajemen-pengunjung/pendaftaran"
                      element={
                        <PrivateRoute
                          element={
                            <PendaftaranPengunjung
                              onSubmit={handleVisitorSubmit}
                            />
                          }
                        />
                      }
                    />
                    <Route
                      path="/manajemen-pengunjung/riwayat"
                      element={
                        <PrivateRoute
                          element={<RiwayatKunjungan data={visitorData} />}
                        />
                      }
                    />
                    <Route
                      path="/manajemen-pengunjung/profil"
                      element={
                        <PrivateRoute
                          element={
                            <ProfilPengunjung visitorData={visitorData[0]} />
                          }
                        />
                      }
                    />
                    <Route
                      path="/manajemen-pengunjung/status"
                      element={
                        <PrivateRoute
                          element={<StatusKunjungan data={statusData} />}
                        />
                      }
                    />
                    <Route
                      path="/analisis-laporan/statistik"
                      element={
                        <PrivateRoute element={<StatistikPengunjung />} />
                      }
                    />
                    <Route
                      path="/analisis-laporan/pendapatan"
                      element={<PrivateRoute element={<LaporanPendapatan />} />}
                    />
                    <Route
                      path="/analisis-laporan/tren"
                      element={<PrivateRoute element={<TrenKunjungan />} />}
                    />
                    <Route
                      path="/analisis-laporan/export"
                      element={<PrivateRoute element={<ExportData />} />}
                    />
                    <Route
                      path="/pengaturan-sistem/manajemen"
                      element={<PrivateRoute element={<ManajemenPengguna />} />}
                    />
                    <Route
                      path="/pengaturan-sistem/konfigurasi"
                      element={<PrivateRoute element={<KonfigurasiSistem />} />}
                    />
                    <Route
                      path="/pengaturan-sistem/keamanan"
                      element={<PrivateRoute element={<Keamanan />} />}
                    />
                    <Route
                      path="/pengaturan-sistem/backup"
                      element={<PrivateRoute element={<BackupData />} />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Content>
                <Footer
                  style={{
                    textAlign: "center",
                    color: isDarkMode ? "#fff" : "#000",
                  }}
                >
                  ©2024 Leuwi Data Center
                </Footer>
              </Layout>
            </Layout>
          </Spin>
        </ConfigProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
