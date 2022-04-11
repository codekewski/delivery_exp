/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateExperiencePackageArgs } from "./CreateExperiencePackageArgs";
import { UpdateExperiencePackageArgs } from "./UpdateExperiencePackageArgs";
import { DeleteExperiencePackageArgs } from "./DeleteExperiencePackageArgs";
import { ExperiencePackageFindManyArgs } from "./ExperiencePackageFindManyArgs";
import { ExperiencePackageFindUniqueArgs } from "./ExperiencePackageFindUniqueArgs";
import { ExperiencePackage } from "./ExperiencePackage";
import { DealershipFindManyArgs } from "../../dealership/base/DealershipFindManyArgs";
import { Dealership } from "../../dealership/base/Dealership";
import { ExperiencePackageService } from "../experiencePackage.service";

@graphql.Resolver(() => ExperiencePackage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExperiencePackageResolverBase {
  constructor(
    protected readonly service: ExperiencePackageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "read",
    possession: "any",
  })
  async _experiencePackagesMeta(
    @graphql.Args() args: ExperiencePackageFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [ExperiencePackage])
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "read",
    possession: "any",
  })
  async experiencePackages(
    @graphql.Args() args: ExperiencePackageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExperiencePackage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ExperiencePackage",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ExperiencePackage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "read",
    possession: "own",
  })
  async experiencePackage(
    @graphql.Args() args: ExperiencePackageFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExperiencePackage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ExperiencePackage",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ExperiencePackage)
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "create",
    possession: "any",
  })
  async createExperiencePackage(
    @graphql.Args() args: CreateExperiencePackageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExperiencePackage> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ExperiencePackage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ExperiencePackage"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ExperiencePackage)
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "update",
    possession: "any",
  })
  async updateExperiencePackage(
    @graphql.Args() args: UpdateExperiencePackageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExperiencePackage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExperiencePackage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ExperiencePackage"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ExperiencePackage)
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "delete",
    possession: "any",
  })
  async deleteExperiencePackage(
    @graphql.Args() args: DeleteExperiencePackageArgs
  ): Promise<ExperiencePackage | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Dealership])
  @nestAccessControl.UseRoles({
    resource: "ExperiencePackage",
    action: "read",
    possession: "any",
  })
  async dealership(
    @graphql.Parent() parent: ExperiencePackage,
    @graphql.Args() args: DealershipFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dealership[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Dealership",
    });
    const results = await this.service.findDealership(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
