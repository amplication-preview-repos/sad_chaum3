import { ChatUpdateManyWithoutUsersInput } from "./ChatUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  chats?: ChatUpdateManyWithoutUsersInput;
  cv?: InputJsonValue;
  education?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  skills?: string | null;
  username?: string;
  videoPresentation?: InputJsonValue;
  workExperience?: InputJsonValue;
};
