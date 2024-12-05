// src/pages/PengaturanSistem/KonfigurasiSistem.jsx
import React, { useState } from "react";
import { ConfigProvider, Switch, Button, message } from "antd";

const KonfigurasiSistem = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    message.success(`Mode gelap ${checked ? "diaktifkan" : "dimatikan"}`);
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1890ff" }, dark: isDarkMode }}>
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: isDarkMode ? "#141414" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <h3>Konfigurasi Sistem</h3>
        <div style={{ marginBottom: "20px" }}>
          <span>Aktifkan Mode Gelap: </span>
          <Switch checked={isDarkMode} onChange={toggleDarkMode} />
        </div>
        <Button
          type="primary"
          onClick={() => message.success("Konfigurasi disimpan")}
          style={{
            backgroundColor: isDarkMode ? "#333333" : undefined,
            color: isDarkMode ? "#ffffff" : undefined,
          }}
        >
          Simpan Pengaturan
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default KonfigurasiSistem;
