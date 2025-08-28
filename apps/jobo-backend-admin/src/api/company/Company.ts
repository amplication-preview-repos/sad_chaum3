import { Chat } from "../chat/Chat";
import { Interview } from "../interview/Interview";
import { Job } from "../job/Job";
import { JsonValue } from "type-fest";

export type Company = {
  chats?: Array<Chat>;
  companySize: string | null;
  createdAt: Date;
  id: string;
  interviews?: Array<Interview>;
  jobs?: Array<Job>;
  logo: JsonValue;
  name: string | null;
  recruiter: string | null;
  sector: string | null;
  updatedAt: Date;
};
