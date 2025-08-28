import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const InterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Interviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="answers" source="answers" />
        <ReferenceField label="company" source="company.id" reference="Company">
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
