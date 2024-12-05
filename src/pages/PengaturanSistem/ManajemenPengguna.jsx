// src/pages/PengaturanSistem/ManajemenPengguna.jsx
import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';

const ManajemenPengguna = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', email: 'admin@domain.com' },
    { id: 2, username: 'user1', email: 'user1@domain.com' }
  ]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const showModal = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const handleSave = (values) => {
    if (editingUser) {
      setUsers((prevUsers) => prevUsers.map(user => 
        user.id === editingUser.id ? { ...user, ...values } : user
      ));
      message.success('Pengguna berhasil diubah');
    } else {
      const newUser = { id: Date.now(), ...values };
      setUsers([...users, newUser]);
      message.success('Pengguna baru berhasil ditambahkan');
    }
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const columns = [
    { title: 'Username', dataIndex: 'username' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Actions',
      render: (text, user) => (
        <Button onClick={() => showModal(user)} type="link">
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button 
        type="primary" 
        onClick={() => showModal(null)} 
        style={{ marginBottom: '20px' }}
      >
        Tambah Pengguna
      </Button>
      <Table 
        dataSource={users} 
        columns={columns} 
        rowKey="id" 
      />
      <Modal
        title={editingUser ? 'Edit Pengguna' : 'Tambah Pengguna'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form 
          initialValues={editingUser}
          onFinish={handleSave}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Username wajib diisi' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email wajib diisi' }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {editingUser ? 'Simpan' : 'Tambah'}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ManajemenPengguna;
