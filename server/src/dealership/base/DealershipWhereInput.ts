/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DeliveryBayListRelationFilter } from "../../deliveryBay/base/DeliveryBayListRelationFilter";
import { ExperiencePackageListRelationFilter } from "../../experiencePackage/base/ExperiencePackageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class DealershipWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DeliveryBayListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryBayListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryBayListRelationFilter, {
    nullable: true,
  })
  deliveryBays?: DeliveryBayListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ExperiencePackageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExperiencePackageListRelationFilter)
  @IsOptional()
  @Field(() => ExperiencePackageListRelationFilter, {
    nullable: true,
  })
  experiencePackages?: ExperiencePackageListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}
export { DealershipWhereInput };
