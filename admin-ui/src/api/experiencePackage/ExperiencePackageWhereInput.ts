import { DealershipListRelationFilter } from "../dealership/DealershipListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ExperiencePackageWhereInput = {
  active?: "Active" | "Inactive";
  chargeable?: "Yes" | "No";
  dealership?: DealershipListRelationFilter;
  duration?: BooleanNullableFilter;
  id?: StringFilter;
  imageGallery?: JsonFilter;
  keyImage?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
