import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const BlockerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dealership Blocker" source="blocker_dealershp" />
        <TextField label="Delivery Bay" source="deliveryBay" />
        <TextField label="ID" source="id" />
        <TextField label="Owner" source="owner" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
