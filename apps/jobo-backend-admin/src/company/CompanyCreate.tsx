import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { JobTitle } from "../job/JobTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="chats" reference="Chat">
          <SelectArrayInput
            optionText={ChatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="company_size" source="companySize" />
        <ReferenceArrayInput source="interviews" reference="Interview">
          <SelectArrayInput
            optionText={InterviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="jobs" reference="Job">
          <SelectArrayInput
            optionText={JobTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="recruiter" source="recruiter" />
        <TextInput label="sector" source="sector" />
      </SimpleForm>
    </Create>
  );
};
