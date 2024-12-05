// src/pages/PengaturanSistem/Keamanan.jsx
import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const Keamanan = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword) {
      message.error('Semua kolom harus diisi');
      return;
    }
    // Logika perubahan password
    message.success('Kata sandi berhasil diubah');
  };

  return (
    <div>
      <h3>Keamanan</h3>
      <div style={{ marginBottom: '20px' }}>
        <Input.Password
          placeholder="Kata sandi saat ini"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.Password
          placeholder="Kata sandi baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button type="primary" onClick={handlePasswordChange}>
          Ubah Kata Sandi
        </Button>
      </div>
    </div>
  );
};

export default Keamanan;
