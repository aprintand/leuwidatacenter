import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Row, Col, Button, Typography, message } from 'antd';

const { Title } = Typography;

const ProfilPengunjung = ({ visitorData, onSave }) => {
  const [form] = Form.useForm(); // Menggunakan Form Ant Design untuk kontrol yang lebih baik
  const [isSaving, setIsSaving] = useState(false); // Mengelola status pengiriman data

  // Inisialisasi form dengan data pengunjung yang ada
  useEffect(() => {
    if (visitorData) {
      form.setFieldsValue(visitorData); // Mengisi form dengan data awal
    }
  }, [visitorData, form]);

  // Menangani penyimpanan data
  const handleSave = async () => {
    if (!onSave) {
      message.error("onSave function is not provided.");
      return;
    }

    try {
      setIsSaving(true);
      const values = form.getFieldsValue(); // Mengambil semua nilai dari form

      // Memanggil onSave dari parent dengan data yang telah diperbarui
      await onSave(values);
      message.success("Profil pengunjung berhasil diperbarui!");

      form.resetFields(); // Reset form setelah berhasil disimpan
    } catch (error) {
      message.error("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSaving(false); // Set status menyimpan kembali
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Title level={3}>Edit Profil Pengunjung</Title>
        <Form form={form} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Nama" name="nama" rules={[{ required: true, message: 'Nama wajib diisi!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Alamat" name="alamat" rules={[{ required: true, message: 'Alamat wajib diisi!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Preferensi" name="preferensi">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Catatan" name="catatan">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Button
            type="primary"
            onClick={handleSave}
            loading={isSaving} // Menampilkan loading saat sedang menyimpan
            disabled={isSaving} // Menonaktifkan tombol saat sedang menyimpan
          >
            Simpan Perubahan
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ProfilPengunjung;
