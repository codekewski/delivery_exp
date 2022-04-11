import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ExperiencePackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
