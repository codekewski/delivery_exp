import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DealershipServiceBase } from "./base/dealership.service.base";

@Injectable()
export class DealershipService extends DealershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
