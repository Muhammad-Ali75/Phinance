import { redirect } from "react-router-dom";
import { deleteItem } from "../utils/helper";

export async function logoutAction() {
  deleteItem({ key: "userName" });
  return redirect("/");
}
