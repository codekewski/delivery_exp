import { DeliveryBayWhereInput } from "./DeliveryBayWhereInput";
import { DeliveryBayOrderByInput } from "./DeliveryBayOrderByInput";

export type DeliveryBayFindManyArgs = {
  where?: DeliveryBayWhereInput;
  orderBy?: Array<DeliveryBayOrderByInput>;
  skip?: number;
  take?: number;
};
