/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExperiencePackageWhereUniqueInput } from "../../experiencePackage/base/ExperiencePackageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ExperiencePackageUpdateManyWithoutDealershipsInput {
  @Field(() => [ExperiencePackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperiencePackageWhereUniqueInput],
  })
  connect?: Array<ExperiencePackageWhereUniqueInput>;

  @Field(() => [ExperiencePackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperiencePackageWhereUniqueInput],
  })
  disconnect?: Array<ExperiencePackageWhereUniqueInput>;

  @Field(() => [ExperiencePackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExperiencePackageWhereUniqueInput],
  })
  set?: Array<ExperiencePackageWhereUniqueInput>;
}
export { ExperiencePackageUpdateManyWithoutDealershipsInput };
