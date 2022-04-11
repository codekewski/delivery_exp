import { Module } from "@nestjs/common";
import { BlockerModuleBase } from "./base/blocker.module.base";
import { BlockerService } from "./blocker.service";
import { BlockerController } from "./blocker.controller";
import { BlockerResolver } from "./blocker.resolver";

@Module({
  imports: [BlockerModuleBase],
  controllers: [BlockerController],
  providers: [BlockerService, BlockerResolver],
  exports: [BlockerService],
})
export class BlockerModule {}
