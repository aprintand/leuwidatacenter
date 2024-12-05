import React, { useState } from "react";
import { Row, Col, Card, Typography, Statistic } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const { Title } = Typography;

const StatistikPengunjung = () => {
  const [data, setData] = useState({
    daily: [
      { time: "2024-12-01", visitors: 30 },
      { time: "2024-12-02", visitors: 45 },
      { time: "2024-12-03", visitors: 40 },
      { time: "2024-12-04", visitors: 50 },
    ],
    weekly: [
      { time: "Week 1", visitors: 150 },
      { time: "Week 2", visitors: 200 },
      { time: "Week 3", visitors: 180 },
      { time: "Week 4", visitors: 220 },
    ],
    monthly: [
      { time: "November", visitors: 1000 },
      { time: "December", visitors: 1200 },
    ],
  });

  return (
    <div style={{ padding: "20px" }}>
      <Title level={3}>Statistik Pengunjung</Title>
      <Row gutter={16}>
        {/* Pengunjung Harian */}
        <Col span={8}>
          <Card>
            <Statistic
              title="Pengunjung Harian"
              value={data.daily[data.daily.length - 1].visitors}
            />
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Pengunjung Mingguan */}
        <Col span={8}>
          <Card>
            <Statistic
              title="Pengunjung Mingguan"
              value={data.weekly[data.weekly.length - 1].visitors}
            />
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.weekly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Pengunjung Bulanan */}
        <Col span={8}>
          <Card>
            <Statistic
              title="Pengunjung Bulanan"
              value={data.monthly[data.monthly.length - 1].visitors}
            />
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.monthly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StatistikPengunjung;
