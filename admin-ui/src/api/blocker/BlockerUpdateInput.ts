import { DeliveryBayUpdateManyWithoutBlockersInput } from "./DeliveryBayUpdateManyWithoutBlockersInput";

export type BlockerUpdateInput = {
  blockedBay?: DeliveryBayUpdateManyWithoutBlockersInput;
  blocker_dealershp?: "complete_block" | "partial_block" | null;
  deliveryBay?: string | null;
  owner?: string | null;
  status?: "Active" | "Cancelled" | null;
};
