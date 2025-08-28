import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  chats?: ChatListRelationFilter;
  cv?: JsonFilter;
  education?: JsonFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phone?: StringNullableFilter;
  skills?: StringNullableFilter;
  username?: StringFilter;
  videoPresentation?: JsonFilter;
  workExperience?: JsonFilter;
};
