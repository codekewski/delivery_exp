import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DEALERSHIP_TITLE_FIELD } from "../dealership/DealershipTitle";

export const DeliveryBayList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Delivery Bays"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
