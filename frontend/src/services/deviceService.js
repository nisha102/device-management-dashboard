const API_BASE_URL = "http://localhost:5001";

export const fetchDevices = async () => {
  const response = await fetch(`${API_BASE_URL}/devices`);
  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }
  return response.json();
};
