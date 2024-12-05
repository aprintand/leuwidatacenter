import React, { useState } from 'react';
import { Table, Switch, Typography, Modal, Button } from 'antd';
import ProfilPengunjung from './ProfilPengunjung';

const { Title } = Typography;

const StatusKunjungan = ({ initialData }) => {
  const [visitorData, setVisitorData] = useState(initialData); // Menyimpan data pengunjung
  const [selectedVisitor, setSelectedVisitor] = useState(null); // Pengunjung yang dipilih
  const [isModalVisible, setIsModalVisible] = useState(false); // Untuk menampilkan modal

  // Menangani perubahan status kunjungan
  const handleStatusChange = (key, checked) => {
    setVisitorData(prevData =>
      prevData.map(item =>
        item.key === key ? { ...item, status: checked } : item
      )
    );
  };

  // Menangani klik pada nama pengunjung untuk menampilkan profil
  const handleNameClick = (visitor) => {
    setSelectedVisitor(visitor); // Menyimpan pengunjung yang dipilih
    setIsModalVisible(true); // Menampilkan modal
  };

  // Menangani penyimpanan data setelah edit
  const handleSaveChanges = (updatedVisitor) => {
    setVisitorData(prevData =>
      prevData.map(item =>
        item.key === updatedVisitor.key ? updatedVisitor : item
      )
    );
    setIsModalVisible(false); // Menutup modal setelah penyimpanan
  };

  // Kolom-kolom tabel
  const columns = [
    {
      title: 'Nama Pengunjung',
      dataIndex: 'nama',
      key: 'nama',
      render: (text, record) => (
        <a
          onClick={() => handleNameClick(record)}
          style={{ textDecoration: 'underline', cursor: 'pointer' }} // Menambahkan garis bawah
        >
          {text}
        </a>
      ),
    },
    {
      title: 'Tujuan Kunjungan',
      dataIndex: 'tujuan',
      key: 'tujuan',
    },
    {
      title: 'Waktu Masuk',
      dataIndex: 'waktuMasuk',
      key: 'waktuMasuk',
    },
    {
      title: 'Status Kunjungan',
      key: 'status',
      render: (_, record) => (
        <Switch
          checked={record.status}
          onChange={(checked) => handleStatusChange(record.key, checked)}
          checkedChildren="Aktif"
          unCheckedChildren="Pasif"
        />
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Status Kunjungan Aktif</Title>
      <Table
        dataSource={visitorData}
        columns={columns}
        bordered
        pagination={{ pageSize: 5 }}
      />

      {/* Modal untuk menampilkan Profil Pengunjung */}
      <Modal
        title="Profil Pengunjung"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Tutup
          </Button>,
        ]}
      >
        {selectedVisitor ? (
          <ProfilPengunjung
            visitorData={selectedVisitor}
            onSave={handleSaveChanges} // Kirim fungsi untuk menyimpan perubahan
          />
        ) : (
          <p>Data pengunjung tidak ditemukan.</p>
        )}
      </Modal>
    </div>
  );
};

export default StatusKunjungan;
