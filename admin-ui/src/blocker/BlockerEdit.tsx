import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DeliveryBayTitle } from "../deliveryBay/DeliveryBayTitle";

export const BlockerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="blockedBay"
          reference="DeliveryBay"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryBayTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="blocker_dealershp"
          label="Dealership Blocker"
          choices={[
            { label: "Complete", value: "complete_block" },
            { label: "Bay Only", value: "partial_block" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Delivery Bay" source="deliveryBay" />
        <TextInput label="Owner" source="owner" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
