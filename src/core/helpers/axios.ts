import axios from "axios";
import { IRequest } from "../interfaces/IRequest";
import { AxiosInstance } from "./../../../node_modules/axios/index.d";

export class Axios<T> implements IRequest<T> {
  private axiosClient!: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: process.env.BING_URL,
      timeout: 30,
      headers: { "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY },
    });
  }

  get(path: string): Promise<T> {
    return this.axiosClient.get(path);
  }
}
