import { DeliveryBay } from "../deliveryBay/DeliveryBay";

export type Blocker = {
  blockedBay?: Array<DeliveryBay>;
  createdAt: Date;
  blocker_dealershp?: "complete_block" | "partial_block" | null;
  deliveryBay: string | null;
  id: string;
  owner: string | null;
  status?: "Active" | "Cancelled" | null;
  updatedAt: Date;
};
