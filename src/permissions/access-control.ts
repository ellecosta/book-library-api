import { AccessControl } from "accesscontrol";

export const ac = new AccessControl();

ac.grant("admin")
  .createAny("user")
  .readAny("user")
  .updateAny("user")
  .deleteAny("user");

ac.grant("user")
  .readOwn("user")
  .createAny("user")
  .updateOwn("user")
  .deleteOwn("user");
