import { BlockerUpdateManyWithoutDeliveryBaysInput } from "./BlockerUpdateManyWithoutDeliveryBaysInput";
import { DealershipWhereUniqueInput } from "../dealership/DealershipWhereUniqueInput";

export type DeliveryBayUpdateInput = {
  bayBlocker?: BlockerUpdateManyWithoutDeliveryBaysInput;
  businessHours?: boolean | null;
  dealership?: DealershipWhereUniqueInput;
  name?: string | null;
};
