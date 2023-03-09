import { IQueryContext } from "./IQueryContext";
import { IRankingResponse } from "./IRankingResponse";
import { IRelatedSearches } from "./IRelatedSearches";
import { WebPages } from "./IWebPages";

export interface IBing {
  _type: string;
  queryContext: IQueryContext;
  webPages: WebPages;
  relatedSearches: IRelatedSearches;
  rankingResponse: IRankingResponse;
}
