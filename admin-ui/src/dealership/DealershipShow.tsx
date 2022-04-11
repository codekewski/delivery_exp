import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { DEALERSHIP_TITLE_FIELD } from "./DealershipTitle";

export const DealershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DeliveryBay"
          target="DealershipId"
          label="Delivery Bays"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Business Hours" source="businessHours" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dealership"
              source="dealership.id"
              reference="Dealership"
            >
              <TextField source={DEALERSHIP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
