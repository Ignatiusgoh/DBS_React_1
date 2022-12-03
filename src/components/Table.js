import { useState } from "react";
import Transactions from "./Transactions";
import ScheduledTransactions from "./ScheduledTransactions";

function Table() {
  const [toggleState, setToggleState] = useState(1);

  const create = () => {};

  return (
    <div
      className="App"
      style={{
        width: "70%",
        height: "300px",
        position: "absolute",
        left: "300px",
        top: "20%",
        fontSize: 13,
        textAlign: "center"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 300,
            color: "white",
          }}
        >
          <div
            style={{
              height: 30,
              background: "#ec1d25",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              marginRight: 10,
            }}
            onClick={() => setToggleState(1)}
          >
            Transactions
          </div>
          <div
            style={{
              height: 30,
              background: "#ec1d25",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 10,
              whiteSpace: "nowrap",
            }}
            onClick={() => setToggleState(2)}
          >
            Scheduled Transactions
          </div>
        </div>
        <div
          style={{
            padding: 6,
            margin: 10,
            fontSize: 14,
            color: "white",
            borderRadius: 10,
            background: "#ec1d25",
          }}
          onClick={() => create()}
        >
          Create Scheduled Transaction
        </div>
      </div>

      <Transactions {...{ setToggleState, toggleState }} />
      <ScheduledTransactions {...{ setToggleState, toggleState }} />
    </div>
  );
}

export default Table;
