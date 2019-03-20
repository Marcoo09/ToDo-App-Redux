import httpService from "../httpService";

export const getData = () => {
  return httpService.get("http://todo-backend-express.herokuapp.com/", {});
};
