import { Blocker as TBlocker } from "../api/blocker/Blocker";

export const BLOCKER_TITLE_FIELD = "deliveryBay";

export const BlockerTitle = (record: TBlocker): string => {
  return record.deliveryBay || record.id;
};
