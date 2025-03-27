const DeviceDrawer = ({ device, onClose }) => {
  if (!device) return null;

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
      <button onClick={onClose} style={{ float: "right" }}>
        X
      </button>
      <h3>Device Details</h3>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Model:</strong> {device.model}</p>
      <p><strong>Data Source:</strong> {device.dataSource}</p>

      <button disabled={device.status === "Inactive"}>
        Update APN
      </button>
    </div>
  );
};

export default DeviceDrawer;
