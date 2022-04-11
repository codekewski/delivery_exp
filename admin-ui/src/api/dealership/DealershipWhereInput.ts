import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryBayListRelationFilter } from "../deliveryBay/DeliveryBayListRelationFilter";
import { ExperiencePackageListRelationFilter } from "../experiencePackage/ExperiencePackageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DealershipWhereInput = {
  address?: StringNullableFilter;
  deliveryBays?: DeliveryBayListRelationFilter;
  experiencePackages?: ExperiencePackageListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
