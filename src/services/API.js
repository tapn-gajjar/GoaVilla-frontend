import axios from "axios";
import APIUrl from "./APIUrl";

class API {
  constructor() {
    this.instance = axios.create({
      baseURL: `${APIUrl.backendUrl}`,
    });
  }

  GetData = async (body) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  
    const response = await this.instance.get(
      `${APIUrl.backendUrl}/Url/`,
      config
    );
    return response;
  };


 
  

}
const apiInstance = new API();
export default apiInstance;



