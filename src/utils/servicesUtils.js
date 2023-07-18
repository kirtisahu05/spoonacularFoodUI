// Helper function to construct query parameters
const constructQueryParams = (endpoint, queries) => {
  const apiKey = {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY
  };
  const urlQueries = { ...apiKey, ...queries };
  const queryString = Object.keys(urlQueries)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(urlQueries[key])}`
    )
    .join("&");

  return `${endpoint}?${queryString}`;
};

// Helper function to construct URL
const constructURL = (endpoint) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return `${BASE_URL}${endpoint}`;
};

export { constructQueryParams, constructURL };
