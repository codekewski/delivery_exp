import { DeliveryBay as TDeliveryBay } from "../api/deliveryBay/DeliveryBay";

export const DELIVERYBAY_TITLE_FIELD = "name";

export const DeliveryBayTitle = (record: TDeliveryBay): string => {
  return record.name || record.id;
};
