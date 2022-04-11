import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlockerService } from "./blocker.service";
import { BlockerControllerBase } from "./base/blocker.controller.base";

@swagger.ApiTags("blockers")
@common.Controller("blockers")
export class BlockerController extends BlockerControllerBase {
  constructor(
    protected readonly service: BlockerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
