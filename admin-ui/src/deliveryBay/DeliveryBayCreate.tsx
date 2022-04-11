import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BlockerTitle } from "../blocker/BlockerTitle";
import { DealershipTitle } from "../dealership/DealershipTitle";

export const DeliveryBayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bayBlocker"
          reference="Blocker"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlockerTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Business Hours" source="businessHours" />
        <ReferenceInput
          source="dealership.id"
          reference="Dealership"
          label="Dealership"
        >
          <SelectInput optionText={DealershipTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
