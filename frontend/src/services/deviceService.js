const API_BASE_URL = "http://localhost:5001";

export const fetchDevices = async () => {
  const response = await fetch(`${API_BASE_URL}/devices`);
  if (!response.ok) throw new Error("Failed to fetch devices");
  return response.json();
};

export const updateApn = async (deviceId) => {
  const response = await fetch(`${API_BASE_URL}/devices/${deviceId}/actions/update-apn`, {
    method: "POST",
  });

  if (!response.ok) throw new Error("APN update failed");
  return response.json();
};
