import { useLoaderData } from "react-router-dom";
import { fetchData } from "../utils/helper";

export function dashBoardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Dashboard() {
  const { userName } = useLoaderData();
  return <div>{userName}</div>;
}

export default Dashboard;
