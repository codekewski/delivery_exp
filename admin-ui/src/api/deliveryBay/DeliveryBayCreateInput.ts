import { BlockerCreateNestedManyWithoutDeliveryBaysInput } from "./BlockerCreateNestedManyWithoutDeliveryBaysInput";
import { DealershipWhereUniqueInput } from "../dealership/DealershipWhereUniqueInput";

export type DeliveryBayCreateInput = {
  bayBlocker?: BlockerCreateNestedManyWithoutDeliveryBaysInput;
  businessHours?: boolean | null;
  dealership: DealershipWhereUniqueInput;
  name?: string | null;
};
