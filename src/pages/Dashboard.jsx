import { useLoaderData } from "react-router-dom";
import { createBudget, createExpense, fetchData } from "../utils/helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetsForm from "../components/AddBudgetsForm";
import AddExpenseForm from "../components/AddExpenseForm";

export function dashBoardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

export async function dashBoardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error(
        "There was an problem creating your account. Please try again."
      );
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget created successfully");
    } catch (error) {
      throw new Error(
        "There was an error creating your budget. Please try again."
      );
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Budget ${values.newExpense} created successfully`);
    } catch (error) {
      throw new Error(
        "There was an error creating your expense. Please try again."
      );
    }
  }
}

function Dashboard() {
  const { userName, budgets } = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashbaord">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetsForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetsForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
}

export default Dashboard;
