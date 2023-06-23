import { useLoaderData } from "react-router-dom";
import { fetchData } from "../utils/helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashBoardLoader() {
  const userName = fetchData("userName");
  return { userName };
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
  const { userName } = useLoaderData();

  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
}

export default Dashboard;
