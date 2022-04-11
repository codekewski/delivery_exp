import { ExperiencePackageWhereInput } from "./ExperiencePackageWhereInput";
import { ExperiencePackageOrderByInput } from "./ExperiencePackageOrderByInput";

export type ExperiencePackageFindManyArgs = {
  where?: ExperiencePackageWhereInput;
  orderBy?: Array<ExperiencePackageOrderByInput>;
  skip?: number;
  take?: number;
};
