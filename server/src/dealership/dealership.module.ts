import { Module } from "@nestjs/common";
import { DealershipModuleBase } from "./base/dealership.module.base";
import { DealershipService } from "./dealership.service";
import { DealershipController } from "./dealership.controller";
import { DealershipResolver } from "./dealership.resolver";

@Module({
  imports: [DealershipModuleBase],
  controllers: [DealershipController],
  providers: [DealershipService, DealershipResolver],
  exports: [DealershipService],
})
export class DealershipModule {}
