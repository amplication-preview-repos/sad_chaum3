import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { JobTitle } from "../job/JobTitle";

export const InterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <TextInput label="questions" multiline source="questions" />
        <NumberInput step={1} label="ranking" source="ranking" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
