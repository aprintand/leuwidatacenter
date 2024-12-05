// src/pages/AnalisisLaporan/TrenKunjungan.jsx
import React, { useState } from "react";
import { Row, Col, Card, Typography, Select } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const { Title } = Typography;
const { Option } = Select;

const TrenKunjungan = () => {
  // Dummy data for visit trends based on time and demographics
  const [data, setData] = useState({
    daily: [
      { date: "2024-12-01", total: 50, male: 30, female: 20 },
      { date: "2024-12-02", total: 60, male: 35, female: 25 },
      { date: "2024-12-03", total: 55, male: 32, female: 23 },
      { date: "2024-12-04", total: 70, male: 40, female: 30 },
    ],
    weekly: [
      { week: "Week 1", total: 200, male: 120, female: 80 },
      { week: "Week 2", total: 250, male: 150, female: 100 },
      { week: "Week 3", total: 230, male: 140, female: 90 },
      { week: "Week 4", total: 300, male: 180, female: 120 },
    ],
    monthly: [
      { month: "January", total: 800, male: 480, female: 320 },
      { month: "February", total: 950, male: 570, female: 380 },
      { month: "March", total: 900, male: 540, female: 360 },
    ],
  });

  // Default data to show is daily visits
  const [selectedPeriod, setSelectedPeriod] = useState("daily");
  const [selectedGender, setSelectedGender] = useState("total");

  const handlePeriodChange = (value) => {
    setSelectedPeriod(value);
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  // Define the chart data based on selected period and gender
  const chartData = data[selectedPeriod].map((item) => ({
    name: item.date || item.week || item.month,
    value: item[selectedGender],
  }));

  return (
    <div style={{ padding: "20px" }}>
      <Title level={3}>Tren Kunjungan</Title>

      {/* Filters for Period and Gender */}
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col span={12}>
          <Select
            defaultValue="daily"
            style={{ width: "100%" }}
            onChange={handlePeriodChange}
          >
            <Option value="daily">Harian</Option>
            <Option value="weekly">Mingguan</Option>
            <Option value="monthly">Bulanan</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select
            defaultValue="total"
            style={{ width: "100%" }}
            onChange={handleGenderChange}
          >
            <Option value="total">Total Kunjungan</Option>
            <Option value="male">Laki-Laki</Option>
            <Option value="female">Perempuan</Option>
          </Select>
        </Col>
      </Row>

      {/* Line Chart showing the visit trend */}
      <Card>
        <Title level={4}>Grafik Tren Kunjungan</Title>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Additional Insights */}
      <Card style={{ marginTop: "20px" }}>
        <Title level={4}>Statistik Kunjungan</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Title level={5}>Total Kunjungan</Title>
              <p>
                {data[selectedPeriod].reduce(
                  (acc, cur) => acc + cur[selectedGender],
                  0
                )}{" "}
                pengunjung
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Title level={5}>Jumlah Laki-Laki</Title>
              <p>
                {data[selectedPeriod].reduce(
                  (acc, cur) => acc + cur["male"],
                  0
                )}{" "}
                pengunjung
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Title level={5}>Jumlah Perempuan</Title>
              <p>
                {data[selectedPeriod].reduce(
                  (acc, cur) => acc + cur["female"],
                  0
                )}{" "}
                pengunjung
              </p>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TrenKunjungan;
