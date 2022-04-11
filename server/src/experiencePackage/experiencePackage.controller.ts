import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExperiencePackageService } from "./experiencePackage.service";
import { ExperiencePackageControllerBase } from "./base/experiencePackage.controller.base";

@swagger.ApiTags("experiencePackages")
@common.Controller("experiencePackages")
export class ExperiencePackageController extends ExperiencePackageControllerBase {
  constructor(
    protected readonly service: ExperiencePackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
