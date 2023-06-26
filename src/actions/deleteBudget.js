import { redirect } from "react-router-dom";
import { deleteItem, getAllMatchingItems } from "../utils/helper";
import { toast } from "react-toastify";

export async function deleteBudget({ params }) {
  try {
    await deleteItem({ key: "budgets", id: params.id });
    const associatedExpenses = await getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({ key: "expenses", id: expense.id });
    });
    toast.success("Budget deleted successfully!");
  } catch (error) {
    throw new Error("There was a problem deleting your budget.");
  }
  return redirect("/");
}
