import apiService from "./apiService";
import { constructQueryParams } from "../utils";

const apiAdapter = {
  getRecipes: async (endpoint, queries = {}) => {
    try {
      const endpointURL = await constructQueryParams(endpoint, queries);
      const data = await apiService.get(endpointURL);
      return data;
    } catch (error) {
      console.log("apiAdapter-error", error);
      // throw new Error("Error fetching data from the server", error);
    }
  }
};

export default apiAdapter;
