import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { InterviewTitle } from "../interview/InterviewTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="interviews" reference="Interview">
          <SelectArrayInput
            optionText={InterviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="requirements" multiline source="requirements" />
        <NumberInput step={1} label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
