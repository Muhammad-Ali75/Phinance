import { useLoaderData } from "react-router-dom";
import { fetchData } from "../utils/helper";
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
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error(
      "There was an problem creating your account. Please try again."
    );
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
