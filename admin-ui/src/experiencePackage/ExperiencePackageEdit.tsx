import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DealershipTitle } from "../dealership/DealershipTitle";

export const ExperiencePackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="active"
          label="Active"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="chargeable"
          label="Chargeable"
          choices={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="dealership"
          reference="Dealership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DealershipTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Duration" source="duration" />
        <div />
        <div />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
