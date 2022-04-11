import { DeliveryBayCreateNestedManyWithoutBlockersInput } from "./DeliveryBayCreateNestedManyWithoutBlockersInput";

export type BlockerCreateInput = {
  blockedBay?: DeliveryBayCreateNestedManyWithoutBlockersInput;
  blocker_dealershp?: "complete_block" | "partial_block" | null;
  deliveryBay?: string | null;
  owner?: string | null;
  status?: "Active" | "Cancelled" | null;
};
