import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeliveryBayTitle } from "../deliveryBay/DeliveryBayTitle";
import { ExperiencePackageTitle } from "../experiencePackage/ExperiencePackageTitle";

export const DealershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="deliveryBays"
          reference="DeliveryBay"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryBayTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="experiencePackages"
          reference="ExperiencePackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperiencePackageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
