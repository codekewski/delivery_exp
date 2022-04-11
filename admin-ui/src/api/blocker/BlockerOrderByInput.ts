import { SortOrder } from "../../util/SortOrder";

export type BlockerOrderByInput = {
  createdAt?: SortOrder;
  blocker_dealershp?: SortOrder;
  deliveryBay?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
