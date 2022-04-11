import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BlockerServiceBase } from "./base/blocker.service.base";

@Injectable()
export class BlockerService extends BlockerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
