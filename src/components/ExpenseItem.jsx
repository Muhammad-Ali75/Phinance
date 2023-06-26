import { formatCurrency, formatDate } from "../utils/helper";

function ExpenseItem({ expense }) {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDate(expense.createdAt)}</td>
    </>
  );
}

export default ExpenseItem;
