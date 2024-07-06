import axios from "axios";

export const signInAPI = async (data: any) => {
  const baseUrl = "http://localhost:8080";

  const response = await axios
    .get(baseUrl+"/login", data)
    .catch((error) => null);
  if (!response) return null;

  const result = response.data;
  return result;
};

export const signUpAPI = async (data: any) => {
  const response = await axios
    .post("서버 주소 쓰는듯 ex) localhost:4000 사인 업", data)
    .catch((error) => null);
  if (!response) return null;

  const result = response.data;
  return result;
};
