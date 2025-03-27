import React, { useEffect, useState } from "react";
import DeviceTable from "../components/DeviceTable";
import { fetchDevices } from "../services/deviceService";

const DeviceListPage = () => {
  const [devices, setDevices] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const data = await fetchDevices();
        setDevices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, []);

  if (loading) return <p>Loading devices...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <DeviceTable
      devices={devices}
      filterStatus={filterStatus}
      setFilterStatus={setFilterStatus}
    />
  );
};

export default DeviceListPage;
