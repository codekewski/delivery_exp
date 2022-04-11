import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlockerWhereInput = {
  blocker_dealershp?: "complete_block" | "partial_block";
  deliveryBay?: StringNullableFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  status?: "Active" | "Cancelled";
};
