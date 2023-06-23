import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../utils/helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetsForm from "../components/AddBudgetsForm";

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
}

function Dashboard() {
  const { userName, budgets } = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashbaord">
          <h1>
            Welxome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ?():()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetsForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
}

export default Dashboard;
