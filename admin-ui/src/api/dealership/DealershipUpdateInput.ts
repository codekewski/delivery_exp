import { DeliveryBayUpdateManyWithoutDealershipsInput } from "./DeliveryBayUpdateManyWithoutDealershipsInput";
import { ExperiencePackageUpdateManyWithoutDealershipsInput } from "./ExperiencePackageUpdateManyWithoutDealershipsInput";

export type DealershipUpdateInput = {
  address?: string | null;
  deliveryBays?: DeliveryBayUpdateManyWithoutDealershipsInput;
  experiencePackages?: ExperiencePackageUpdateManyWithoutDealershipsInput;
  name?: string | null;
};
