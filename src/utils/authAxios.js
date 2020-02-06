import axios from "axios";

export const authAxios = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      'Content-Type': 'applicaiton.json',
      'Authorization': `${token}`
    },
  });
};