import * as React from "react";
import { AuthModel, UserModel } from "../modules/model";
// import { AppModel } from "./modules/AppModel";

// export const appStore = AppModel.create({});

// export const appStoreContext = React.createContext(appStore);
export const authStoreContext = React.createContext(AuthModel.create({}));
export const userStoreContext = React.createContext(UserModel.create({}));
