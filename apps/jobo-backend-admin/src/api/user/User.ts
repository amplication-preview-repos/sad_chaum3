import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";
import { Notification } from "../notification/Notification";

export type User = {
  age: number | null;
  chats?: Array<Chat>;
  createdAt: Date;
  cv: JsonValue;
  education: JsonValue;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  phone: string | null;
  roles: JsonValue;
  skills: string | null;
  updatedAt: Date;
  username: string;
  videoPresentation: JsonValue;
  workExperience: JsonValue;
};
