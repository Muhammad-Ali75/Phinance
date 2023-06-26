import { redirect } from "react-router-dom";
import { deleteItem } from "../utils/helper";
import { toast } from "react-toastify";

export async function logoutAction() {
  deleteItem({ key: "userName" });
  deleteItem({ key: "budgets" });
  deleteItem({ key: "expenses" });
  toast.success("Your account has been deleted!");
  return redirect("/");
}
