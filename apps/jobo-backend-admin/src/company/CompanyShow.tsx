import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company_size" source="companySize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="name" source="name" />
        <TextField label="recruiter" source="recruiter" />
        <TextField label="sector" source="sector" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Chat" target="companyId" label="Chats">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="messages" source="messages" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="companyId"
          label="Interviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="answers" source="answers" />
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="questions" source="questions" />
            <TextField label="ranking" source="ranking" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Job" target="companyId" label="Jobs">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="requirements" source="requirements" />
            <TextField label="salary" source="salary" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
