/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Dealership,
  DeliveryBay,
  ExperiencePackage,
} from "@prisma/client";

export class DealershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DealershipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipFindManyArgs>
  ): Promise<number> {
    return this.prisma.dealership.count(args);
  }

  async findMany<T extends Prisma.DealershipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipFindManyArgs>
  ): Promise<Dealership[]> {
    return this.prisma.dealership.findMany(args);
  }
  async findOne<T extends Prisma.DealershipFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipFindUniqueArgs>
  ): Promise<Dealership | null> {
    return this.prisma.dealership.findUnique(args);
  }
  async create<T extends Prisma.DealershipCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipCreateArgs>
  ): Promise<Dealership> {
    return this.prisma.dealership.create<T>(args);
  }
  async update<T extends Prisma.DealershipUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipUpdateArgs>
  ): Promise<Dealership> {
    return this.prisma.dealership.update<T>(args);
  }
  async delete<T extends Prisma.DealershipDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DealershipDeleteArgs>
  ): Promise<Dealership> {
    return this.prisma.dealership.delete(args);
  }

  async findDeliveryBays(
    parentId: string,
    args: Prisma.DeliveryBayFindManyArgs
  ): Promise<DeliveryBay[]> {
    return this.prisma.dealership
      .findUnique({
        where: { id: parentId },
      })
      .deliveryBays(args);
  }

  async findExperiencePackages(
    parentId: string,
    args: Prisma.ExperiencePackageFindManyArgs
  ): Promise<ExperiencePackage[]> {
    return this.prisma.dealership
      .findUnique({
        where: { id: parentId },
      })
      .experiencePackages(args);
  }
}
