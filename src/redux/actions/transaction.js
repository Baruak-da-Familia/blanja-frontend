import * as actions from "./actionTypes";
import { doTransaction } from "../../utils/reqData";

export const transaction = (data) => {
   return {
      type: actions.INSERT_TRANSACTION,
      payload: doTransaction(data),
   };
};