import { DealershipCreateNestedManyWithoutExperiencePackagesInput } from "./DealershipCreateNestedManyWithoutExperiencePackagesInput";
import { InputJsonValue } from "../../types";

export type ExperiencePackageCreateInput = {
  active?: "Active" | "Inactive" | null;
  chargeable?: "Yes" | "No" | null;
  dealership?: DealershipCreateNestedManyWithoutExperiencePackagesInput;
  duration?: boolean | null;
  imageGallery?: InputJsonValue;
  keyImage?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
