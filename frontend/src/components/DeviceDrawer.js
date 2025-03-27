import React, { useState } from "react";
import { updateApn } from "../services/deviceService";

const DeviceDrawer = ({ device, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!device) return null;

  const handleApnUpdate = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await updateApn(device.id);
      setMessage(response.message || "APN updated successfully!");
    } catch (err) {
      setMessage("Failed to update APN.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        background: "#f4f4f4",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <button onClick={onClose} style={{ float: "right" }}>X</button>
      <h3>Device Details</h3>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Model:</strong> {device.model}</p>
      <p><strong>Data Source:</strong> {device.dataSource}</p>

      <button
        onClick={handleApnUpdate}
        disabled={device.status === "Inactive" || loading}
      >
        {loading ? "Updating..." : "Update APN"}
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default DeviceDrawer;
