import { Axios } from "../helpers/axios";
import { IBingResponse } from "../interfaces/Bing/IBingResponse";

export class BingService {
  private axios;
  private BING_PATH = process.env.REACT_APP_BING_SEARCH_PATH || "";

  constructor() {
    this.axios = new Axios<IBingResponse>();
  }

  getSearchResults(textQuery: string) {
    return this.axios.get(this.BING_PATH + textQuery);
  }
}
