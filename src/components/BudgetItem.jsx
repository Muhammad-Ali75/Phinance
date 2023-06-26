import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../utils/helper";
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";

function BudgetItem({ budget, showDelete = false }) {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)}</small>
        <small>{formatCurrency(amount - spent)}</small>
      </div>
      {showDelete ? (
        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (!confirm("Are you sure you want to delete this budget?")) {
              event.preventDefault();
            }
          }}
        >
          <button className="btn" type="submit">
            <span>Delete budget</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View details</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default BudgetItem;
