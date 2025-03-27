import React from "react";

const DeviceTable = ({ devices, filterStatus, setFilterStatus }) => {
  const filteredDevices = devices.filter((device) =>
    filterStatus === "All" ? true : device.status === filterStatus
  );

  return (
    <div>
      <h2>Device List</h2>
      <label>
        Filter by Status:{" "}
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </label>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Status</th>
            <th>Telemetry Source</th>
            <th>Last Communication</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>{device.status}</td>
              <td>{device.telemetrySource}</td>
              <td>{device.lastCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
