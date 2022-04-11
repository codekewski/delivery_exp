import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BlockerTitle } from "../blocker/BlockerTitle";
import { DealershipTitle } from "../dealership/DealershipTitle";

export const DeliveryBayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
