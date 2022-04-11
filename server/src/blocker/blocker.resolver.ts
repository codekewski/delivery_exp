import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BlockerResolverBase } from "./base/blocker.resolver.base";
import { Blocker } from "./base/Blocker";
import { BlockerService } from "./blocker.service";

@graphql.Resolver(() => Blocker)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlockerResolver extends BlockerResolverBase {
  constructor(
    protected readonly service: BlockerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
