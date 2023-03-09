import { IDetailsWebPages } from "./IDetailsWebPages";

export interface WebPages {
  webSearchUrl: string;
  totalEstimatedMatches: number;
  value: IDetailsWebPages[];
  someResultsRemoved: boolean;
}
