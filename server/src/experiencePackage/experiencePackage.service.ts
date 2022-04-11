import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ExperiencePackageServiceBase } from "./base/experiencePackage.service.base";

@Injectable()
export class ExperiencePackageService extends ExperiencePackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
