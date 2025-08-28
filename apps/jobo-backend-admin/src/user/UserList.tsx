import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cv" source="cv" />
        <TextField label="education" source="education" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="video_presentation" source="videoPresentation" />
        <TextField label="work_experience" source="workExperience" />{" "}
      </Datagrid>
    </List>
  );
};
