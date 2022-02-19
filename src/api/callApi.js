import axios from "axios";

const proxy = process.env.REACT_APP_URL_PROXY;

const token = localStorage.getItem("token");

const authHeader = { "x-auth-token": token ? token : "" };

const options = (url, method, data = "") => {
  switch (method) {
    case "GET":
      return {
        method: "GET",
        url: proxy + url,
        headers: authHeader,
      };
    case "POST":
      return {
        method: "POST",
        url: proxy + url,
        data: data,
        headers: {
          "Content-Type": "application/json",
          authHeader,
        },
      };
    case "DELETE":
      return {
        method: "DELETE",
        url: proxy + url,
        headers: authHeader,
      };
    default:
      return {};
  }
};

export const callAPI = async (url, method, data = "") => {
  const option = options(url, method, data);
  try {
    const response = await axios(option);
    return response;
  } catch (error) {
    return { data: error, error: true };
  }
};
