import { Module } from "@nestjs/common";
import { DeliveryBayModuleBase } from "./base/deliveryBay.module.base";
import { DeliveryBayService } from "./deliveryBay.service";
import { DeliveryBayController } from "./deliveryBay.controller";
import { DeliveryBayResolver } from "./deliveryBay.resolver";

@Module({
  imports: [DeliveryBayModuleBase],
  controllers: [DeliveryBayController],
  providers: [DeliveryBayService, DeliveryBayResolver],
  exports: [DeliveryBayService],
})
export class DeliveryBayModule {}
