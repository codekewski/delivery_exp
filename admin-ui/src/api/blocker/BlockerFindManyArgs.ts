import { BlockerWhereInput } from "./BlockerWhereInput";
import { BlockerOrderByInput } from "./BlockerOrderByInput";

export type BlockerFindManyArgs = {
  where?: BlockerWhereInput;
  orderBy?: Array<BlockerOrderByInput>;
  skip?: number;
  take?: number;
};
