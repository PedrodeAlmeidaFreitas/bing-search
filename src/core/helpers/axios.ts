import axios from "axios";
import { IRequest } from "../interfaces/IRequest";
import { AxiosInstance } from "./../../../node_modules/axios/index.d";

export class Axios<T> implements IRequest<T> {
  private axiosClient!: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: process.env.REACT_APP_BING_URL,
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_SUBSCRIPTION_KEY,
      },
    });
  }

  get(path: string): Promise<T> {
    return this.axiosClient.get(path);
  }
}
