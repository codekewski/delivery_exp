import { Module } from "@nestjs/common";
import { ExperiencePackageModuleBase } from "./base/experiencePackage.module.base";
import { ExperiencePackageService } from "./experiencePackage.service";
import { ExperiencePackageController } from "./experiencePackage.controller";
import { ExperiencePackageResolver } from "./experiencePackage.resolver";

@Module({
  imports: [ExperiencePackageModuleBase],
  controllers: [ExperiencePackageController],
  providers: [ExperiencePackageService, ExperiencePackageResolver],
  exports: [ExperiencePackageService],
})
export class ExperiencePackageModule {}
