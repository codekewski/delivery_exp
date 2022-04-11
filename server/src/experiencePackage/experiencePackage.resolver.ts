import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ExperiencePackageResolverBase } from "./base/experiencePackage.resolver.base";
import { ExperiencePackage } from "./base/ExperiencePackage";
import { ExperiencePackageService } from "./experiencePackage.service";

@graphql.Resolver(() => ExperiencePackage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExperiencePackageResolver extends ExperiencePackageResolverBase {
  constructor(
    protected readonly service: ExperiencePackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
