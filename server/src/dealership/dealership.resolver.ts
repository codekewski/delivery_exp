import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DealershipResolverBase } from "./base/dealership.resolver.base";
import { Dealership } from "./base/Dealership";
import { DealershipService } from "./dealership.service";

@graphql.Resolver(() => Dealership)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DealershipResolver extends DealershipResolverBase {
  constructor(
    protected readonly service: DealershipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
