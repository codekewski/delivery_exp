import { Dealership as TDealership } from "../api/dealership/Dealership";

export const DEALERSHIP_TITLE_FIELD = "name";

export const DealershipTitle = (record: TDealership): string => {
  return record.name || record.id;
};
