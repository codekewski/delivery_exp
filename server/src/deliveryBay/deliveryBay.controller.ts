import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryBayService } from "./deliveryBay.service";
import { DeliveryBayControllerBase } from "./base/deliveryBay.controller.base";

@swagger.ApiTags("deliveryBays")
@common.Controller("deliveryBays")
export class DeliveryBayController extends DeliveryBayControllerBase {
  constructor(
    protected readonly service: DeliveryBayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
