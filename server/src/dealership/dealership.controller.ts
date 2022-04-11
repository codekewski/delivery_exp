import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DealershipService } from "./dealership.service";
import { DealershipControllerBase } from "./base/dealership.controller.base";

@swagger.ApiTags("dealerships")
@common.Controller("dealerships")
export class DealershipController extends DealershipControllerBase {
  constructor(
    protected readonly service: DealershipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
