import { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../actions/transactions";

const SpendingForm = ({ dispatch }) => {
  const [category, setCategory] = useState("Restaurant");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const formSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTransaction(category, title, amount));
  };
  return (
    <form className="form-inline" onSubmit={formSubmit}>
      <h3>Add Transaction</h3>
      <div className="form-group">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="custom-select"
        >
          <option value="Restaurant">Restaurant</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Shopping">Shopping</option>
          <option value="Utilities">Utilities</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Cash">Cash</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
          placeholder="Spending"
        />
      </div>
      <div className="input-group">
        <div className="input-group-addon">$</div>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          id="exampleInputAmount"
          placeholder="Amount"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

// we can pass maptStateToProps
// that converts our redux state to props and passes them down
// we can pass mapDispatchToProps
// that passes down dispatch function
// Basically connect converts our component to stateful

// by default connect passes dispatch
export default connect()(SpendingForm);
