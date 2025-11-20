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
      console.error;
    }
  };

  const fetchForm = () => apiRequest("/api/user/form", "GET");
  const fetchChoice = () => apiRequest("/api/user/choice", "GET");
  const SearchHn = async (value, form, setPat) => {
    try {
      const data = await apiRequest(`/api/user/pat/${value}`, "GET");
      form.setFieldValue(
        "pat_name",
        `${data?.prename}${data?.firstname} ${data?.lastname}` || ""
      );
      form.setFieldValue("hn", data?.hn || "");
      setPat(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  return { fetchForm, fetchChoice, SearchHn };
};
