import { Dealership } from "../dealership/Dealership";
import { JsonValue } from "type-fest";

export type ExperiencePackage = {
  active?: "Active" | "Inactive" | null;
  chargeable?: "Yes" | "No" | null;
  createdAt: Date;
  dealership?: Array<Dealership>;
  duration: boolean | null;
  id: string;
  imageGallery: JsonValue;
  keyImage: JsonValue;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
