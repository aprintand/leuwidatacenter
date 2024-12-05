import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";

const { Title } = Typography;

const PendaftaranPengunjung = ({ onSubmit }) => {
  const [form] = Form.useForm();

  // Menangani submit form
  const handleSubmit = (values) => {
    console.log("Data pengunjung baru:", values);
    
    // Mengirim data ke parent component
    onSubmit(values);
    
    // Memberikan pesan sukses
    message.success("Pendaftaran pengunjung berhasil!");
    
    // Reset form setelah submit
    form.resetFields();
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Title level={3}>Pendaftaran Pengunjung Baru</Title>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Nama"
            name="nama"
            rules={[{ required: true, message: "Nama wajib diisi!" }]}
          >
            <Input placeholder="Masukkan nama pengunjung" />
          </Form.Item>

          <Form.Item
            label="Tujuan Kunjungan"
            name="tujuan"
            rules={[{ required: true, message: "Tujuan wajib diisi!" }]}
          >
            <Input placeholder="Masukkan tujuan kunjungan" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Daftar
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default PendaftaranPengunjung;
