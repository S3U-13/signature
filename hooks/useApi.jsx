const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://locahost:3000";

export const useApiRequest = () => {
  const apiRequest = async (endpoint, method = "GET", body = null) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = { method, headers };
    if (body && method !== "GET") options.body = JSON.stringify(body);

    try {
      const res = await fetch(`${API_URL}${endpoint}`, options);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error();
    }
  };

  const fetchForm = () => apiRequest("/api/user/form", "GET");

  return { fetchForm };
};
