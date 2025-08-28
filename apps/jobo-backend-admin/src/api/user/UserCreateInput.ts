import { ChatCreateNestedManyWithoutUsersInput } from "./ChatCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  age?: number | null;
  chats?: ChatCreateNestedManyWithoutUsersInput;
  cv?: InputJsonValue;
  education?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  skills?: string | null;
  username: string;
  videoPresentation?: InputJsonValue;
  workExperience?: InputJsonValue;
};
