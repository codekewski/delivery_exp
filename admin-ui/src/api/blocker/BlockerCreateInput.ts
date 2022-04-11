export type BlockerCreateInput = {
  blocker_dealershp?: "complete_block" | "partial_block" | null;
  deliveryBay?: string | null;
  owner?: string | null;
  status?: "Active" | "Cancelled" | null;
};
