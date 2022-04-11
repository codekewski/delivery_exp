import { BlockerListRelationFilter } from "../blocker/BlockerListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DealershipWhereUniqueInput } from "../dealership/DealershipWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryBayWhereInput = {
  bayBlocker?: BlockerListRelationFilter;
  businessHours?: BooleanNullableFilter;
  dealership?: DealershipWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
