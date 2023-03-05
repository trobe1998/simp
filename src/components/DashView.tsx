/** @format */

import React, {useEffect, useState} from "react";
import style from "../assets/css/dash.module.css";
import {HomeTable, Stats} from "../components";
interface showside {
  show: boolean;
  user: {
    _id: string;
    fullName: string;
    email: string;
    password: string;
  };
}
interface statsType {
  current_bal: number;
  success_trn: number;
  outcome: number;
  failed_trn: number;
}
interface trnType {
  amount: string;
  card: string;
  date: string;
  description: string;
  status: string;
  type: string;
}
const DashView = ({show, user}: showside) => {
  const [transactions, setTransactions] = useState([]);
  const [statsData, setStatsData] = useState<statsType>({
    current_bal: 0,
    success_trn: 0,
    outcome: 0,
    failed_trn: 0,
  });

  let arr = [
    {
      stat_name: "Currrent Balance",
      // no: `${statsData?.current_bal}.00`,
      no: `11690.00`,
      cod: "Amount in account",
    },
    {
      stat_name: "Successful Transaction",
      no: `${statsData?.success_trn}.00`,
      cod: "Total expenditure",
    },
    {
      stat_name: "Pending transactions",
      no: `${statsData?.failed_trn}.00`,
      cod: "Reversed transactions",
    },
    {
      stat_name: "Total Transactions",
      no: `${statsData?.outcome}.00`,
      cod: "Total amount to hit account",
    },
  ];

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await fetch(`/api/user/transactions/${user._id}`);
        const data = await response.json();
        setStatsData({
          current_bal: 1500,
          success_trn: 0,
          outcome: 0,
          failed_trn: 0,
        });
        setTransactions(data.userTransactions);
        let total: number = 0;
        data.userTransactions.map((trn: trnType) => {
          total = total + Number(trn.amount);
       
          if (trn.status === "1") {
            setStatsData((prev) => ({
              ...prev,
              success_trn: Number(trn.amount) + prev.success_trn,
            }));
          }

          if (trn.status === "0" || trn.status === "2") {
            setStatsData((prev) => ({
              ...prev,
              failed_trn: Number(trn.amount) + prev.failed_trn,
            }));
          }
        });
        setStatsData((prev) => ({ ...prev, outcome: total }));
      } catch (error) {
        console.log(error)
      }
    };

    getTransactions();
  }, []);
  return (
    <>
      <div
        className={`row ${style.content} ${!show ? `${style.extend}` : null}`}
      >
        <div className={`col-12 mb-2 ${style.welcome_msg}`}>
          <h5>Welcome {user.fullName} </h5>{" "}
          <p>All systems are running smoothly! You have 3 unread alerts!</p>
        </div>
        <div className={`col-12 col-md-6 ${style.time}`}>
          <span> {new Date().toLocaleString()}</span>
        </div>
        <div className="col-12 col-md-6">
          <div className={`row mt-2 mt-md-0 pl-0 pl-md-1 ${style.stats_brief}`}>
            {arr.map((data, i) => (
              <div className="col-12 col-md-6 my-2 my-md-0" key={i}>
                <Stats data={data} />
              </div>
            ))}
          </div>
        </div>
        {statsData.failed_trn !== 0 ||
        statsData.success_trn !== 0 ||
        statsData.outcome !== 0 ? (
          <HomeTable data={transactions} />
        ) : null}
      </div>
    </>
  );
};

export default DashView;

// function setTrn(data: any) {
//   throw new Error("Function not implemented.");
// }
