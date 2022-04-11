import { DealershipWhereInput } from "./DealershipWhereInput";
import { DealershipOrderByInput } from "./DealershipOrderByInput";

export type DealershipFindManyArgs = {
  where?: DealershipWhereInput;
  orderBy?: Array<DealershipOrderByInput>;
  skip?: number;
  take?: number;
};
