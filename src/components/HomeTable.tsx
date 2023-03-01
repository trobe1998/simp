/** @format */

import React from "react";
import style from "../assets/css/dash.module.css";

interface trnData {
  data: {
    description: string;
    type: string;
    card: string;
    date: string;
    amount: string;
    status: string;
  }[]
}
interface rowData {
  data: {
    description: string;
    type: string;
    card: string;
    date: string;
    amount: string;
    status: string;
  }
}
const TableRow = ({ data }: rowData) => {
  return (
    <>
      <td className="font-weight-bold">{data.description}</td>
      <td className="font-weight-bold">{data.type}</td>
      <td className="font-weight-bold">{data.card}</td>
      <td className="font-weight-bold">{data.date}</td>
      <td className="font-weight-bold">${data.amount}</td>
      <td className="font-weight-medium">
        <div
          className={`${style.badge} ${
            data.status === '1'
              ? style.badge_success
              : data.status === '0'
              ? style.badge_cancelled
              : style.badge_warning
          }`}
        >
          {data.status === '1'
            ? "Completed"
            : data.status === '0'
            ? "cancelled"
            : "pending"}
        </div>
      </td>
    </>
  );
};
const HomeTable = ({ data }: trnData) => {
  return (
    <div className={`card my-5 ${style.card}`}>
      <div className="card-body">
        <p className="card-title mb-0 font-weight-bolder">Transactions</p>
        <div className="table-responsive">
          <table className="table table-striped table-borderless">
            <thead>
              <tr
                style={{
                  color: "grey",
                  fontWeight: "lighter",
                }}
              >
                <th>descriptions</th>
                <th>type</th>
                <th>card</th>
                <th>date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <TableRow data={row} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
