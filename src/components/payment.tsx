/** @format */

import {FormEvent, useState} from "react";
import style from "../assets/css/dash.module.css";

interface showside {
  show: boolean;
}
const Payment = ({ show }: showside) => {
 
  //  const id = value[0]._id;
  const [paymentData, setPaymentData] = useState({
    user: "63f80b019547e69ab6c8669b",
    card: "",
    sendTo: 0,
    ssn: 0,
    route: 0;
    amount: 0,
  });

  // const [value] = useLocalStorage()
 

  const handleChange = (e: any) => {
    setPaymentData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // setPaymentData((prev) => ({ ...prev, user: id }));
    try {
      const response = await fetch("/api/user/payment", {
        method: "POST",
        body: JSON.stringify(paymentData),
        headers: {"Content-Type": "application/json"},
      });
    } catch (error) {
      console.log("error", error);
    }
    const waiter = setInterval(() => {
      window.alert(
        "sorry we have issues with our api will be fixed with 2 working days"
      );
      clearInterval(waiter);
    }, 5000);

  };

  return (
    <div
      className={`row ${style.content} ${style.payment_wrapper}  ${
        !show ? `${style.extend}` : null
      }`}
    >
      <div className={`col-12 ${style.header}`}>
        <h4>Make Payment</h4>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={`row ${style.payment}`}>
          <div className="col-12 col-md-6 col-lg-4">
            <select
              name="card"
              id=""
              value={paymentData.card}
              className="form-control"
              onChange={(e) => handleChange(e)}
              required
            >
              <option>American Express</option>
            </select>
            <label htmlFor="">select card</label>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <input
              type="number"
              name="sendTo"
              className="form-control"
              value={paymentData.sendTo}
              placeholder="2343********"
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="">Account Number</label>
          </div>
 <div className="col-12 col-md-6 col-lg-4">
            <input
              type="number"
              name="route_number"
              value={paymentData.route}
              className="form-control"
              placeholder="£200"
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="">Routing Number</label>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <input
              type="number"
              name="ssn"
              value={paymentData.ssn}
              className="form-control"
              placeholder="£200"
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="">enter SSN</label>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <input
              type="number"
              name="amount"
              value={paymentData.amount}
              className="form-control"
              placeholder="£200"
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="">enter amount</label>
          </div>
          <div className="col-5">
            <button className="btn btn-primary">Make Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
