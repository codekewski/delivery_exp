import { ExperiencePackage as TExperiencePackage } from "../api/experiencePackage/ExperiencePackage";

export const EXPERIENCEPACKAGE_TITLE_FIELD = "name";

export const ExperiencePackageTitle = (record: TExperiencePackage): string => {
  return record.name || record.id;
};
