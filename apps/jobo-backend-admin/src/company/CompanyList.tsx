import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="company_size" source="companySize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="name" source="name" />
        <TextField label="recruiter" source="recruiter" />
        <TextField label="sector" source="sector" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
