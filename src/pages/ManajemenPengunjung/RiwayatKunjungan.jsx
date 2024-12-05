import React from "react";
import { Table, Empty } from "antd"; // Mengimpor komponen Empty untuk menampilkan pesan saat data kosong

const RiwayatKunjungan = ({ data }) => {
  // Menambahkan key pada data jika tidak ada key yang sudah ada
  const formattedData = data.map((item, index) => ({
    ...item,
    key: item.key || index, // Menambahkan key unik jika tidak ada
  }));

  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("id-ID"); // Format tanggal lokal Indonesia
      },
    },
    {
      title: "Tujuan",
      dataIndex: "tujuan",
      key: "tujuan",
    },
  ];

  return (
    <div>
      <h2>Riwayat Kunjungan</h2>
      {/* Menampilkan Empty jika data kosong */}
      {formattedData.length === 0 ? (
        <Empty description="Tidak ada riwayat kunjungan" />
      ) : (
        <Table dataSource={formattedData} columns={columns} />
      )}
    </div>
  );
};

export default RiwayatKunjungan;
