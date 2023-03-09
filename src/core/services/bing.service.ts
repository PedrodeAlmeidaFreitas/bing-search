import { Axios } from "../helpers/axios";
import { IBingResponse } from "../interfaces/IBingResponse";

export class BingService {
  private axios;

  constructor() {
    this.axios = new Axios<IBingResponse>();
  }

  getSearchResults() {
    this.axios.get("teste");
  }
}
