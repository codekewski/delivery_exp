import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DeliveryBayServiceBase } from "./base/deliveryBay.service.base";

@Injectable()
export class DeliveryBayService extends DeliveryBayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
