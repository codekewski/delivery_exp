import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ExperiencePackageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experience Packages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Active" source="active" />
        <TextField label="Chargeable" source="chargeable" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Image Gallery" source="imageGallery" />
        <TextField label="Key Image" source="keyImage" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
