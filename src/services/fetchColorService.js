import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  // const token = localStorage.getItem("token");
  return axiosWithAuth().get("colors");
};

export default fetchColorService;
