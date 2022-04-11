import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";

import { DEALERSHIP_TITLE_FIELD } from "../dealership/DealershipTitle";

export const DeliveryBayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
