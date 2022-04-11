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
import { CreateBlockerArgs } from "./CreateBlockerArgs";
import { UpdateBlockerArgs } from "./UpdateBlockerArgs";
import { DeleteBlockerArgs } from "./DeleteBlockerArgs";
import { BlockerFindManyArgs } from "./BlockerFindManyArgs";
import { BlockerFindUniqueArgs } from "./BlockerFindUniqueArgs";
import { Blocker } from "./Blocker";
import { BlockerService } from "../blocker.service";

@graphql.Resolver(() => Blocker)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlockerResolverBase {
  constructor(
    protected readonly service: BlockerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "read",
    possession: "any",
  })
  async _blockersMeta(
    @graphql.Args() args: BlockerFindManyArgs
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

  @graphql.Query(() => [Blocker])
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "read",
    possession: "any",
  })
  async blockers(
    @graphql.Args() args: BlockerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Blocker[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Blocker",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Blocker, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "read",
    possession: "own",
  })
  async blocker(
    @graphql.Args() args: BlockerFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Blocker | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Blocker",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Blocker)
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "create",
    possession: "any",
  })
  async createBlocker(
    @graphql.Args() args: CreateBlockerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Blocker> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Blocker",
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
        `providing the properties: ${properties} on ${"Blocker"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Blocker)
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "update",
    possession: "any",
  })
  async updateBlocker(
    @graphql.Args() args: UpdateBlockerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Blocker | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Blocker",
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
        `providing the properties: ${properties} on ${"Blocker"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Blocker)
  @nestAccessControl.UseRoles({
    resource: "Blocker",
    action: "delete",
    possession: "any",
  })
  async deleteBlocker(
    @graphql.Args() args: DeleteBlockerArgs
  ): Promise<Blocker | null> {
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
}
