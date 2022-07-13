import axios from "axios";

export const getClientIp = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    console.log(response);
    return response.data.ip;
    // return response.data.ip;
  } catch (error) {
    console.error(error);
  }
};
