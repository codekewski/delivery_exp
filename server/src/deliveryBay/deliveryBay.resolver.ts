import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DeliveryBayResolverBase } from "./base/deliveryBay.resolver.base";
import { DeliveryBay } from "./base/DeliveryBay";
import { DeliveryBayService } from "./deliveryBay.service";

@graphql.Resolver(() => DeliveryBay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DeliveryBayResolver extends DeliveryBayResolverBase {
  constructor(
    protected readonly service: DeliveryBayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
