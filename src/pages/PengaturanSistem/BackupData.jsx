// src/pages/PengaturanSistem/BackupData.jsx
import React from 'react';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';

const BackupData = () => {
  const handleBackup = () => {
    // Simulasi backup data
    const dummyData = JSON.stringify({ name: 'BackupData', timestamp: Date.now() });

    const blob = new Blob([dummyData], { type: 'application/json' });
    saveAs(blob, 'backup_data.json');
    
    message.success('Backup data berhasil dilakukan');
  };

  return (
    <div>
      <h3>Backup Data</h3>
      <Button type="primary" onClick={handleBackup}>
        Backup Data
      </Button>
    </div>
  );
};

export default BackupData;
