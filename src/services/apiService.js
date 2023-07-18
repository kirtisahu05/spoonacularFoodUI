import { constructURL } from "../utils";

const apiService = {
  get: async (endpoint) => {
    try {
      const url = await constructURL(endpoint);
      console.log("apiService-url", url);
      const response = await fetch(url);
      const data = await response.json();
      if (data.code === 402) alert(data.message);
      return data;
    } catch (error) {
      throw new Error("Error fetching data from the server");
    }
  },

  post: async (endpoint, body) => {
    // try {
    //   const url = `${BASE_URL}${endpoint}`;
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(body)
    //   });
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   throw new Error("Error making POST request");
    // }
  },

  put: async (endpoint, body) => {
    // Implement PUT request logic here
  },

  delete: async (endpoint) => {
    // Implement DELETE request logic here
  }
};

export default apiService;
