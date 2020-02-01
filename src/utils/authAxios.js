import axios from "axios";

export const authAxios = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: ""//"api url"
  });
};