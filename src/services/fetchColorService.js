import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  // const token = localStorage.getItem("token");
  axiosWithAuth().get("colors");
  // .then((res) => {
  //   console.log(res);
  //   return res.data;
  // })
  // .catch((err) => console.log(err));
};

export default fetchColorService;
