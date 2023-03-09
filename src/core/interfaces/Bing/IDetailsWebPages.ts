import { IDeepLink } from "./IDeepLink";

export interface IDetailsWebPages {
  id: string;
  name: string;
  url: string;
  thumbnailUrl?: string;
  isFamilyFriendly: boolean;
  displayUrl: string;
  snippet: string;
  dateLastCrawled: Date;
  language: string;
  isNavigational: boolean;
  deepLinks?: IDeepLink[];
}
