// src/pages/AnalisisLaporan/LaporanPendapatan.jsx
import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Statistic } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Title } = Typography;

const LaporanPendapatan = () => {
  // Dummy data for ticket revenue and additional services
  const [data, setData] = useState({
    pendapatan: [
      { time: '2024-12-01', tiket: 500000, layanan: 150000 },
      { time: '2024-12-02', tiket: 550000, layanan: 200000 },
      { time: '2024-12-03', tiket: 600000, layanan: 250000 },
      { time: '2024-12-04', tiket: 650000, layanan: 300000 },
    ],
  });

  // Calculate total revenue for tickets and additional services
  const totalPendapatanTiket = data.pendapatan.reduce((acc, cur) => acc + cur.tiket, 0);
  const totalPendapatanLayanan = data.pendapatan.reduce((acc, cur) => acc + cur.layanan, 0);

  // Columns for the table
  const columns = [
    {
      title: 'Tanggal',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Pendapatan Tiket',
      dataIndex: 'tiket',
      key: 'tiket',
      render: (text) => `Rp ${text.toLocaleString()}`,
    },
    {
      title: 'Pendapatan Layanan',
      dataIndex: 'layanan',
      key: 'layanan',
      render: (text) => `Rp ${text.toLocaleString()}`,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Laporan Pendapatan</Title>
      
      {/* Statistics Cards for Total Revenue */}
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title="Pendapatan Tiket Total" value={`Rp ${totalPendapatanTiket.toLocaleString()}`} />
            <LineChart width={500} height={300} data={data.pendapatan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tiket" stroke="#8884d8" />
            </LineChart>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Statistic title="Pendapatan Layanan Total" value={`Rp ${totalPendapatanLayanan.toLocaleString()}`} />
            <LineChart width={500} height={300} data={data.pendapatan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="layanan" stroke="#82ca9d" />
            </LineChart>
          </Card>
        </Col>
      </Row>

      {/* Table for Revenue Details */}
      <Card style={{ marginTop: '20px' }}>
        <Title level={4}>Detail Pendapatan</Title>
        <Table
          columns={columns}
          dataSource={data.pendapatan}
          rowKey="time"
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default LaporanPendapatan;
