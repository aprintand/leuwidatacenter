// src/pages/ExportData.jsx
import React from 'react';
import { Button, message } from 'antd';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

const ExportData = () => {
  // Dummy data to export
  const data = [
    { date: '2024-12-01', totalVisitors: 50, male: 30, female: 20 },
    { date: '2024-12-02', totalVisitors: 60, male: 35, female: 25 },
    { date: '2024-12-03', totalVisitors: 55, male: 32, female: 23 },
    { date: '2024-12-04', totalVisitors: 70, male: 40, female: 30 },
  ];

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Laporan Pengunjung', 14, 10);
    doc.autoTable({
      head: [['Tanggal', 'Total Pengunjung', 'Laki-Laki', 'Perempuan']],
      body: data.map(item => [
        item.date,
        item.totalVisitors,
        item.male,
        item.female
      ]),
    });
    doc.save('laporan_pengunjung.pdf');
    message.success('Data berhasil diekspor ke PDF');
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Laporan Pengunjung');
    XLSX.writeFile(wb, 'laporan_pengunjung.xlsx');
    message.success('Data berhasil diekspor ke Excel');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Export Data Laporan Pengunjung</h3>
      
      <Button
        type="primary"
        style={{ marginRight: '10px' }}
        onClick={exportToPDF}
      >
        Export ke PDF
      </Button>
      
      <Button
        type="primary"
        onClick={exportToExcel}
      >
        Export ke Excel
      </Button>
    </div>
  );
};

export default ExportData;
