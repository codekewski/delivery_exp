import { DeliveryBayCreateNestedManyWithoutDealershipsInput } from "./DeliveryBayCreateNestedManyWithoutDealershipsInput";
import { ExperiencePackageCreateNestedManyWithoutDealershipsInput } from "./ExperiencePackageCreateNestedManyWithoutDealershipsInput";

export type DealershipCreateInput = {
  address?: string | null;
  deliveryBays?: DeliveryBayCreateNestedManyWithoutDealershipsInput;
  experiencePackages?: ExperiencePackageCreateNestedManyWithoutDealershipsInput;
  name?: string | null;
};
