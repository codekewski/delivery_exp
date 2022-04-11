import { DeliveryBay } from "../deliveryBay/DeliveryBay";
import { ExperiencePackage } from "../experiencePackage/ExperiencePackage";

export type Dealership = {
  address: string | null;
  createdAt: Date;
  deliveryBays?: Array<DeliveryBay>;
  experiencePackages?: Array<ExperiencePackage>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
