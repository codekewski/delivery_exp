import { Blocker } from "../blocker/Blocker";
import { Dealership } from "../dealership/Dealership";

export type DeliveryBay = {
  bayBlocker?: Array<Blocker>;
  businessHours: boolean | null;
  createdAt: Date;
  dealership?: Dealership;
  id: string;
  name: string | null;
  updatedAt: Date;
};
