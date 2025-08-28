import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CompanyWhereInput = {
  chats?: ChatListRelationFilter;
  companySize?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  jobs?: JobListRelationFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
  recruiter?: StringNullableFilter;
  sector?: StringNullableFilter;
};
