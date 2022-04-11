import { DealershipUpdateManyWithoutExperiencePackagesInput } from "./DealershipUpdateManyWithoutExperiencePackagesInput";
import { InputJsonValue } from "../../types";

export type ExperiencePackageUpdateInput = {
  active?: "Active" | "Inactive" | null;
  chargeable?: "Yes" | "No" | null;
  dealership?: DealershipUpdateManyWithoutExperiencePackagesInput;
  duration?: boolean | null;
  imageGallery?: InputJsonValue;
  keyImage?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
