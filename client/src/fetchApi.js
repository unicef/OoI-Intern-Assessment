import axios from "axios";

export const server = "http://localhost:9000/";
const Fetch = async (url, method = "GET", data) => {
  let options = {
    baseURL: server,
    url,
     method,
    data: data ? data : {},
    responseType: "json",
    timeout:500,

  };
  return await axios(options).then((res) => res.data);
};
export default Fetch;
